import express, {Request, Response}from 'express';
import { Subscriber } from '../models/subscribers.js';

export const router = express.Router();

// Getting all subscribers
router.get('/', async (req: Request, res: Response) => {
  try {
    
  }
})
// Getting one subscriber
router.get('/:id', (req: Request,res: Response) => {
  res.send(req.params.id)
})
// Creating one subscriber
router.post('/', (req:Request, res:Response) => {

})
// Updating one subscriber
router.patch('/:id', (req:Request, res:Response) => {

})

// Deleting one subscriber
router.delete('/:id', (req:Request, res:Response) => {

})
