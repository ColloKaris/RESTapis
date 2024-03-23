import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser('thisismysecret')); // calls the cookie parser function to read cookie

app.get('/greet', (req: Request, res: Response) => {
  const { name = 'No-name' } = req.cookies;
  res.send(`Her there ${name}`);
});

app.get('/setname', (req: Request, res: Response) => {
  res.cookie('name', 'henrietta'); // sent as part of the response
  // but not actually the response. So still need to send response
  res.cookie('animal', 'harlequin shrimp');

  res.send('OK SENT YOU A COOKIE');
});

app.get('/getsignedcookie', (req: Request, res: Response) => {
  res.cookie('fruit', 'grape', {signed: true});
  res.send('OK SIGNED YOUR FRUIT COOKIE')
});

app.get('/verifyfruit', (req: Request, res: Response) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies);
})

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
