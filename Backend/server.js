import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import router from "./routes/user.routes.js";


const app=express();
dotenv.config({path:"./.env"});
dbConnection();

app.use(express.json())
// app.use(cors())
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use('/api', router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})