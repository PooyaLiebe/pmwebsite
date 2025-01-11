/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pooyapayvar25:lVahtDBxArGDJFNJ@preventivewebapp.i7vs6.mongodb.net/pmwebapp?retryWrites=true&w=majority&appName=preventiveWebApp"
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
