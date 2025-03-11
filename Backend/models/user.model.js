import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,

    },
    courseSelection:{
        type: String,
        required: true,
        enum: ["Computer Science and Engineering", "Information Technology", "Electrical Engineering", "Applied elctronics and instrumentation Engineering", "Civil Engineering"]
    }
})

export const USER=mongoose.model("USER",userSchema);