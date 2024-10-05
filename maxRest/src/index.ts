import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as feedRoutes } from './routes/feed.js'

const app = express();

// initialize body parser for JSON
app.use(bodyParser.json()) // parse incoming json data from requests

// Avoid CORS errors by setting the correct headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/feed', feedRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000!")
})