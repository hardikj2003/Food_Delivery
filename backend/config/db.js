import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hardikj2003:hardik1234@cluster0.bj0mh0f.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("Database connected successfully");
    });
};
