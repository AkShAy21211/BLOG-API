import Blogs from "../entities/blogs";
import IBlogRepository from "./Iblog-repo";
import { Model } from "mongoose";

class BlogRepository implements IBlogRepository {
  constructor(private _blogModel: Model<Blogs>) {}
  async getAllBlogs(): Promise<Blogs[]> {
    return this._blogModel.find().lean();
  }
  async getBlogById(id: string): Promise<Blogs | undefined | null> {
    return this._blogModel.findById(id).exec();
  }
  async createBlog(blog: Blogs): Promise<Blogs> {
    return this._blogModel.create(blog);
  }
  async updateBlog(
    id: string,
    title: string,
    content: string
  ): Promise<Blogs | undefined | null> {
    const blog = await this._blogModel.findById(id).exec();

    const updatedData = {
      title: title || blog?.title,
      content: content || blog?.content,
    };
    return this._blogModel
      .findByIdAndUpdate(id, updatedData, { new: true })
      
  }
  async deleteBlog(id: string): Promise<any> {
    return await this._blogModel.findByIdAndDelete(id).exec();
  }
}

export default BlogRepository;
