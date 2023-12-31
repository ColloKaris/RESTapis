import express, { Request, Response} from 'express';

const app = express();

// parse JSON bodies
app.use(express.json());

app.route('/')
.get((req: Request, res: Response) => {
  return res.send('You made a GET request');
})
.post((req: Request, res: Response) => {
  res.send("You made a POST request");
})
.put((req: Request, res: Response) => {
  res.send("You made a PUT request");
})
.delete((req: Request, res: Response) => {
  console.log("You made an DELETE request")
})




app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})