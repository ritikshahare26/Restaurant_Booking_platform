import mongoose, { mongo } from "mongoose";
const connectDB= async()=>{
    mongoose.connection.on("connection",()=>console.log("MongoDB connected"));
    await mongoose.connect(process.env.MONGOBD_URI!);
}
export default connectDB;