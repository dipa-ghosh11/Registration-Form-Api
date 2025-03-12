import { USER } from "../models/user.model.js";

export const createUser=async(req, res)=>{
    try{
        const { name, age, email, courseSelection }=req.body;

        const isregistered= await USER.findOne({email});
        if(isregistered)
        {
            return res.status(400).json({
                success: false,
                message: "User already registered"
            })
        }

        const newUser = await USER.create({ name, age, email, courseSelection });
        // await newUser.save();
 
        return res.status(200).json({
            sucess: true,
            message: "User created sucessfully"
        })
    }
    catch(error)
    {
        // console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
} 


export const getUsers=async(req, res)=>{
    try{
        const users= await USER.find();

        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found"
            });
        }

        return res.status(200).json({
            succes: true,
            message: "Users fetched successfully",
            users
        })

    }
    catch(error)
    {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}