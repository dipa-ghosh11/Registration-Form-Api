import mongoose from "mongoose";

export const dbConnection= ()=>{
    mongoose
    .connect(process.env.MONGO_URI, {dbName: "Registered-User", family:4})
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((error)=>{
        console.log("Some error occurred", error)
    })
}