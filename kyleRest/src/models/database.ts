// Connect to a local MongoDB Database

import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

const app = express();
const port = process.env.PORT;

let uri:string;
if(process.env.DATABASE_URL) {
  uri = process.env.DATABASE_URL;
}


// Use MongoClient to initialize a connection
let client:MongoClient;

const dbname = "channel";

// function connect to the Database
export const connectToDatabase = async () => {
  try {
    client = await MongoClient.connect(uri); // connection to the database
    console.log(`Connected to the ${dbname} Database`);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
    return client.db(dbname); // returning client so that we can use it elsewehere
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
    //return callback(err);
  }
}

//Main function to execute the connectToDatabase Function



