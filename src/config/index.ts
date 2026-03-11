import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
    port: process.env.PORT,
    mongo_db_url:process.env.MONGO_DB_URL,
    jwt_secret: process.env.JWT_SECRET,
    email_user: process.env.EMAIL_USER,
    email_pass: process.env.EMAIL_PASS,
};
export default config;