import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { connectToDatabase } from './models/dbConnect.js';

// execute express
const app = express();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = "channel";
const collectionName = "subscribers"

async function main(client: MongoClient) {
  try {
    await connectToDatabase(client);
    const result = await findData();
    console.log(result);
    app.listen(3000, () => {
      console.log('Listening on port 3000');
    });
    
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Database Connection Closed");
  }
}
main(client);

//function to find data in the collection in the database
async function findData(){
  const result = await client.db(dbName).collection(collectionName).findOne();
  return result;
}
