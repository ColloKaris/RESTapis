import express from 'express';
import { getPosts, createPost } from '../controllers/feed.js';

// mergeParams ensure that all params are also going to be merged to params
// in this router. Issue arises when you prefix it in another fle
export const router = express.Router({mergeParams: true});

// GET /feed/posts
router.get('/posts', getPosts)

// POST /feed/posts
router.post('/posts', createPost)