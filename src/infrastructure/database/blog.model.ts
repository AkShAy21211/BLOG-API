import mongoose, { model, Schema } from "mongoose";
import Blogs from "../../entities/blogs";


const BlogSchema = new Schema<Blogs>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const BlogModel = model<Blogs>("Blog", BlogSchema);

export default BlogModel;
