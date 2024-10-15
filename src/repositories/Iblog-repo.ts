import Blogs from "../entities/blogs";

interface IBlogRepository {
    getAllBlogs(): Promise<Blogs[]>;
    getBlogById(id: string): Promise<Blogs | undefined|null>;
    createBlog(blog: Blogs): Promise<Blogs>;
    updateBlog(id: string, title: string, content: string): Promise<Blogs | undefined|null>;
    deleteBlog(id: string): Promise<any>;
}

export default IBlogRepository;