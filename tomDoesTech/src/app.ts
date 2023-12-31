import express, { Request, Response} from 'express';

const app = express();

// parse JSON bodies
app.use(express.json());

app.get('/',(req: Request, res: Response) => {
  res.redirect('http://example.com')
})

app.post('/api/data', (req: Request, res:Response) => {
  console.log(req.body);

  return res.sendStatus(200);
})

// Listens to all http methods
app.all('/api/all', (req:Request, res:Response) => {
  return res.sendStatus(200);
})



app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})