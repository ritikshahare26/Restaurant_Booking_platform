import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;