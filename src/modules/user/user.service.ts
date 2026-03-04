import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import collections from '../../config/collections';

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
        process.env.JWT_SECRET as string, 
        { expiresIn: '19d' }
    );

    
    const { password: _, ...userWithoutPassword } = user;

    return {
        token,
        user: userWithoutPassword
    };
};

export const userService = {
    createUser,
    loginUser,
};