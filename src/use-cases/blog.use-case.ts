import Blogs from "../entities/blogs";
import IBlogRepository from "../repositories/Iblog-repo";
import IBlogUseCase from "./Iblog.use-case";

class BlogUseCase implements IBlogUseCase {
  constructor(private _blogReposotory: IBlogRepository) {}

  async createBlog(
    title: string,
    content: string,
    authorId: string
  ): Promise<{ success: boolean; message: string }> {
    const blog = await this._blogReposotory.createBlog({
      title,
      content,
      authorId,
    });

    if (blog) {
      return {
        success: true,
        message: "Blog created successfully.",
      };
    }

    return {
      success: false,
      message: "Failed to create blog.",
    };
  }

  async getAllBlogs(): Promise<Blogs[]> {
    return await this._blogReposotory.getAllBlogs();
  }
  async getBlogById(id: string): Promise<Blogs | null | undefined> {
    return await this._blogReposotory.getBlogById(id);
  }
  async updateBlog(
    id: string,
    title: string,
    content: string
  ): Promise<{ success: boolean; message: string }> {
    const updatedBlog = await this._blogReposotory.updateBlog(
      id,
      title,
      content
    );

    if (updatedBlog) {
      return {
        success: true,
        message: "Blog updated successfully.",
      };
    }

    return {
      success: false,
      message: "Failed to update blog.",
    };
  }
  async deleteBlog(id: string): Promise<{ success: boolean; message: string }> {
    const blog = await this._blogReposotory.deleteBlog(id);
    if (blog) {
      return {
        success: true,
        message: "Blog deleted successfully.",
      };
    }
    return {
      success: false,
      message: "Failed to delete blog.",
    };
  }
}

export default BlogUseCase;
