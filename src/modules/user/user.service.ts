import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import collections from '../../config/collections';
import config from '../../config';

const createUser = async (userData: any) => {
    const { email, password } = userData;

    try {
       
        const existingUser = await collections.usersCollection.findOne({ email });
        
        if (existingUser) {
            const error: any = new Error("This email is already registered!");
            error.statusCode = 400;
            throw error;
        }

        // password hashed
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // new user object cretet
        const newUser = {
            ...userData,
            password: hashedPassword,
            role: userData.role || 'user',
            created_at: new Date(),
        };

        const result = await collections.usersCollection.insertOne(newUser);
        return result;
    } catch (err) {
        throw err;
    }
};

// login user 
const loginUser = async (loginData: any) => {
    const { email, password } = loginData;

    // exist user
    const user = await collections.usersCollection.findOne({ email });
    if (!user) {
        const error: any = new Error("User not found!");
        error.statusCode = 404;
        throw error;
    }

    //password matchd
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        const error: any = new Error("Invalid password!");
        error.statusCode = 401;
        throw error;
    }

    // jwt token createt
    const token = jwt.sign(
        { email: user.email, role: user.role }, 
        config.jwt_secret as string, 
        { expiresIn: '19d' }
    );

    
    const { password: _, ...userWithoutPassword } = user;

    return {
        token,
        user: userWithoutPassword
    };
};

const getMe = async (email: string) => {
    const user = await collections.usersCollection.findOne({ email });
    if (!user) throw new Error("User not found!");
    
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword; // এখানে নাম, ইমেজ সব থাকবে
};

const updateUserByEmail = async (email: string, updateData: any) => {
    // পাসওয়ার্ড, ইমেইল এবং বিশেষ করে _id বাদ দিয়ে ফিল্টার করা
    const { password, email: userEmail, _id, ...filteredUpdateData } = updateData;

    try {
        const result = await collections.usersCollection.findOneAndUpdate(
            { email: email },
            { $set: filteredUpdateData },
            { returnDocument: 'after' }
        );

        // ড্রাইভার ভার্সন অনুযায়ী ডাটা চেক
        const updatedUser = (result as any).value || result;

        if (!updatedUser) {
            const error: any = new Error("User not found!");
            error.statusCode = 404;
            throw error;
        }

        const { password: pw, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    } catch (err) {
        throw err;
    }
};

const updatePassword = async (email: string, passwordData: any) => {
    const { currentPassword, newPassword } = passwordData;

    // ১. ইউজারকে খুঁজে বের করা
    const user = await collections.usersCollection.findOne({ email });
    if (!user) throw new Error("User not found!");

    // ২. বর্তমান পাসওয়ার্ড চেক করা
    const isMatched = await bcrypt.compare(currentPassword, user.password);
    if (!isMatched) {
        const error: any = new Error("Current password does not match!");
        error.statusCode = 401;
        throw error;
    }

    // ৩. নতুন পাসওয়ার্ড হ্যাশ করা
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // ৪. আপডেট করা
    const result = await collections.usersCollection.updateOne(
        { email },
        { $set: { password: hashedNewPassword } }
    );

    return result;
};

export const userService = {
    createUser,
    loginUser,
    getMe,
    updateUserByEmail,
    updatePassword,
};