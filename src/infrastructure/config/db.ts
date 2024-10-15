import mongoose from "mongoose";

const connectToDb = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/Blog", {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
      process.exit(1);
    });
};

export default connectToDb;