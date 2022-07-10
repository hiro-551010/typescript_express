import express, { Request, Response, NextFunction } from 'express';

interface MessageRequest extends Request {
  body: {
    message: string;
  }
}

const app = express();

// useはmiddleware
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello World');
  next();
})
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
})
app.post('/', (req: MessageRequest, res, next) => {
  res.send(`<h1>I got ${req.body}</h1>`);
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next();
})
app.listen(3000);


