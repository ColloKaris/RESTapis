import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

let uri: string;


if(process.env.DATABASE_URI) {
  uri = process.env.DATABASE_URI;
}

export const connectToDatabase = async(client:MongoClient) => {
  try {
    await client.connect();
    console.log("CONNECTED TO THE DATABASE");
  } catch (err) {
    console.log("ERROR CONNECTING TO THE DATABASE")
    console.error(err);
  }
}
