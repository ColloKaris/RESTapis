import express, {Request, Response, NextFunction} from 'express';
export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    posts: [{title: 'First Post', content: 'This is the first post!'}]
  });
}

export const createPost = (req: Request, res: Response, next: NextFunction) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully',
    post: { id: new Date().toISOString(), title: title, content: content}
  })
}