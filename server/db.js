/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://pooya:Po@123456@preventivewebapp/?ssl=true&replicaSet=atlas-12x2ua-shard-0&authSource=admin&retryWrites=true&w=majority&appName=preventivewebapp"
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
