import express, { Request, Response, NextFunction} from 'express';

const app = express();

// parse JSON bodies
app.use(express.json());
app.use(middleware)

function middleware (req: Request, res: Response, next: NextFunction){
  
  //req.name = "Tom";;
  console.log("YOU'VE HIT A MIDDLEWARE")
  next()
}

function handleGetBookTwo (req: Request, res: Response, next: NextFunction){
  console.log("SECOND HANDLER");
  return res.send(req.params);
}

app.get('/api/books/:bookId/:authorId',(req: Request, res: Response) => {
  console.log("Route Handler")
  return res.json(req.params);
})

// app.route('/')
// .get((req: Request, res: Response) => {
//   return res.send('You made a GET request');
// })
// .post((req: Request, res: Response) => {
//   res.send("You made a POST request");
// })
// .put((req: Request, res: Response) => {
//   res.send("You made a PUT request");
// })
// .delete((req: Request, res: Response) => {
//   console.log("You made an DELETE request")
// })




app.listen(3000, () => {
  console.log('SERVER LISTENING ON PORT 3000')
})