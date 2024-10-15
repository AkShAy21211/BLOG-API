
interface Blogs {

    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    authorId: string|null;
}

export default Blogs;