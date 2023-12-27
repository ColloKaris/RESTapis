import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import { connectToDatabase } from './models/database.js';

dotenv.config();

// db connection
const collection_name = 'subscribers';
const dbname = 'channel';
let client:MongoClient;


//calls the connect to Database Method
(async () => {
  let dbConnection = await connectToDatabase();
  try {
    if (dbConnection) {
      client = dbConnection;
      const collection = client.db(dbname).collection(collection_name);
      let result = await collection.findOne();
      console.log(result);
    }
  } catch (error) {
    console.log(`An error has occurred ${error}`);
  } finally {
    if (dbConnection) {
      await dbConnection.close();
      console.log("Connection Closed");
    }
  }
})();



