import bcrypt from 'bcrypt';
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

export const userService = {
    createUser,
};