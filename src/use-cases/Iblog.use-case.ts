import Blogs from "../entities/blogs";

interface IBlogUseCase {
    createBlog(title: string, content: string, authorId: string): Promise<{success:boolean,message:string}>;
    getAllBlogs(): Promise<Blogs[]>;
    getBlogById(id: string): Promise<Blogs|null|undefined>;
    updateBlog(id: string, title: string, content: string, authorId: string): Promise<{ success: boolean; message: string }>;
    deleteBlog(id: string): Promise<{ success: boolean; message: string }>;
}

export default IBlogUseCase;
