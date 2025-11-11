import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO__URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospital_management";
  mongoose
    .connect(uri, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
