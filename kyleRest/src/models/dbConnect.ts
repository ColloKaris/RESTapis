import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
let client: MongoClient = new MongoClient(uri);
const dbName = "channel";
const collectionName = "subscribers"



const connectToDatabase = async() => {
  try {
    client = await MongoClient.connect(uri);
    console.log("Connected to the database");
    return client;
  } catch (err) {
    console.log("ERROR CONNECTING TO THE DATABASE")
    console.error(err);
  }
}



export async function main() {
  try {
    const dbConnection = await connectToDatabase();
    if(dbConnection) {

    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Database Connection Closed");
  }
}