import { Request, Response } from "express";
import BlogUseCase from "../use-cases/blog.use-case";

class BlogController {
  constructor(private _blogUseCase: BlogUseCase) {}

  getAllBlogs = async (req: Request, res: Response): Promise<void> => {
    const response = await this._blogUseCase.getAllBlogs();
    res.status(200).json(response);
    return;
  };
  getBlogById = async (req: Request, res: Response): Promise<void> => {
    const response = await this._blogUseCase.getBlogById(req.params.id);
    if (!response) {
      res.status(404).json(response);
      return;
    }
    res.status(200).json(response);
    return;
  };
  createBlog = async (req: Request, res: Response): Promise<void> => {
    if (!req.body.title || !req.body.content || !req.body.authorId) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const response = await this._blogUseCase.createBlog(
      req.body.title,
      req.body.content,
      req.body.authorId
    );

    if (!response) {
      res.status(400).json(response);
      return;
    }
    res.status(201).json(response);
  };
  updateBlog = async (req: Request, res: Response): Promise<void> => {
    if (!req.body.title && !req.body.content) {
      res.status(400).json({ message: "No fields to update" });
      return;
    }
    const response = await this._blogUseCase.updateBlog(
      req.params.id,
      req.body.title,
      req.body.content,
    );
    if (!response) {
      res.status(404).json(response);
      return;
    }
    res.status(200).json(response);
  };
  deleteBlog = async (req: Request, res: Response): Promise<void> => {
    if (!req.params.id) {
      res.status(400).json({ message: "Missing required id" });
      return;
    }
    const response = await this._blogUseCase.deleteBlog(req.params.id);
    if (!response) {
      res.status(404).json(response);
      return;
    }
    res.status(200).json(response);
  };
}

export default BlogController;
