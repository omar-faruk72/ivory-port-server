import { MongoClient, Db } from "mongodb";
import config from ".";

const client = new MongoClient(config.mongo_db_url as string);

let db: Db; 

export const connectDB = async (): Promise<void> => {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
    db = client.db("ivory_port"); 
  } catch (error: any) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export const getDB = (): Db => db;