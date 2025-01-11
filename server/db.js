import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://pooyapayvar25:UIrDeMpaPHWEA1r1@preventive.gw6nj.mongodb.net/?retryWrites=true&w=majority&appName=Preventive"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
