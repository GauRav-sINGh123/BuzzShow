import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGO_DB_URL!,
      {
        dbName: process.env.MONGO_DB_NAME,
      }
    );
    console.log(
      `\n MongoDB Connected || DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MonogDB Connection Failed", error);
    process.exit(1);
  }
};
