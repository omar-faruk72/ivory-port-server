import dotenv from "dotenv";
dotenv.config();
const config = {
    port: process.env.PORT,
    mongo_db_url:process.env.MONGO_DB_URL,
    jwt_secret: process.env.JWT_SECRET,

};
export default config;