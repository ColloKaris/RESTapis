import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { connectToDatabase } from './models/dbConnect.js';
import { router } from './routes/subscribers.js'

// execute express
const app = express();


main(client);

app.use(express.json());
app.use('/subscribers',router);

//function to find data in the collection in the database
// async function findData(){
//   const result = await client.db(dbName).collection(collectionName).findOne();
//   return result;
// }
