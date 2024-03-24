import express, { Request, Response } from 'express';
import session from 'express-session';
// import express-session from 'express-session'

const app = express();

const sessionOptions = {
  secret: 'thisisnotagoodsecret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOptions));

app.get('/viewcount', (req: Request, res: Response) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.get('/register', (req, res) => {
  const { username = 'Anonymous' } = req.query;
  req.session.username = username;
  res.redirect('/greet')
});

app.get('/greet', (req: Request, res: Response) => {
  const { username } = req.session;
  console.log(req.session)
  res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});