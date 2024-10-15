import express, { Request, Response } from 'express';
import asyncHandler from "express-async-handler";

const router = express.Router();

import BlogUseCase from '../../use-cases/blog.use-case';
import BlogModel from '../database/blog.model';
import Repository from '../../repositories/blog-repo';
import BlogController from '../../controllers/blog.controller';

const blogRepository = new Repository(BlogModel);
const blogUseCase = new BlogUseCase(blogRepository);
const blogController = new BlogController(blogUseCase);


router.get('/', asyncHandler(async (req: Request, res: Response) => {
    await blogController.getAllBlogs(req, res);
}));

router.post('/create', asyncHandler(async (req: Request, res: Response) => {
    await blogController.createBlog(req, res);
}));

router.get('/:id', asyncHandler(async (req: Request, res: Response) => {
    await blogController.getBlogById(req, res);
}));

router.put('/:id', asyncHandler(async (req: Request, res: Response) => {
    await blogController.updateBlog(req, res);
}));

router.delete('/:id', asyncHandler(async (req: Request, res: Response) => {
    await blogController.deleteBlog(req, res);
}));

export default router;
