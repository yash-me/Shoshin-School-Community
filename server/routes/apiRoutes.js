import express from 'express';

import {getPosts, createPost, addComment, 
    isResolved} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id/addComment', addComment);
router.patch('/:id/isResolved', isResolved);

export default router;  