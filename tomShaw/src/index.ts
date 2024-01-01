import { MongoClient } from 'mongodb';
import express from 'express';
import bodyParser from 'body-parser';



/** This is the function that will be run every single time that
we run our code */
async function start() {
  try {
    const app = express();

    const mongo = await MongoClient.connect('mongodb://localhost:27017/crm_api');
    await mongo.connect(); // going to connect to our database and keep the connection open
    let db = mongo.db();

    app.use(bodyParser.urlencoded({ extended: false, limit:'500kb' }));

    // Routes
    app.use('/customers', );

    app.listen(3000, () => {
      console.log("SERVER LISTENING ON PORT 3000")
    })

  }
  catch(error) {
    console.error(error);
  }
}

start();