import mongoose from "mongoose";
export const connectDB = async (dbname) => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${dbname}`);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};
