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


export const updateUser=async(req, res)=>{
    try{
        const userId=req.params.id;
        const updateUser=await USER.findByIdAndUpdate(userId, req.body,{new:true});

        if(!updateUser){
            return res.status(404).json(
            { success: false, message: "User nor found" });
        }

        return res.status(200).json({
            succes:true,
            message:"User updated successfully"
        });
    }

    catch(error){
        return res.status(500).json({
            succes:false,
            message: "Internal server error"
        });
    }
}


export const deleteUser=async(req, res)=>{
    try{
        const userId=req.params.id;
        const deleteUser=await USER.findByIdAndDelete(userId);

        if(!deleteUser){
            return res.status(404).json(
                {
                    success: false,
                    message: "User not found"
                }
            );
        }

        return res.status(200).json({
            success:true,
            message: "User deleted successfully"
        });
    }

    catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}