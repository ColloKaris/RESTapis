import express from 'express';
import dotenv from 'dotenv';
import {MongoClient} from 'mongodb'
import { connectToDatabase } from './models/database.js';

dotenv.config();



// db connection
const collection_name = 'subscribers';
const dbname = "channel";

const sampleSubscribers = [
  {
    name: "Ada Lovelace",
    age: 23,
    city: "Nairobi",
    country: "Kenya"
  },
  {
    name: "John Doe",
    age: 33,
    city: "Kampala",
    country: "Uganda"
  }
];

//calls the connect to Database Method
(async () => {
  try{
    const db = await connectToDatabase();
    if(db) {
      const collection = db.collection(collection_name);
      let result = await collection.insertMany(sampleSubscribers)
    }

  } catch (error) {
    console.log(`An error has occurred ${error}`)
  }
})()




// insert subscribers to the collection
//const result = await subscribersCollection.insertMany(sampleSubscribers);
//console.log(result);