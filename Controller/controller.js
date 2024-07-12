import User from "../Model/userData.js"
import express from "express"
import { genrateToken } from "../jwt.js";

export const create = async (req,res)=>{
    try {

        const {email} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            console.log("user is already exist");
            return res.status(500).json({message:"user is already exsist"});
        }


        const user = new User(req.body);
        const token = genrateToken(user.email);
        const save = await user.save();
          console.log(token);
        return res.status(200).json({save,token});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const readOne = async(req,res)=>{
        
       try {
            
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(500).json({message:"user is not found"});
        }


        return res.status(200).json({user});
        
       } catch (error) {
        console.log(error);
        return res.status(500).json(error);
       }
}

export const update = async(req,res)=>{
 try {
        const id = req.params.id;

    const userExsist = await User.findById(id);

    if(!userExsist){
        return res.status(500).json({message:"user is not found"});
    }

    const userUpdate = await User.findByIdAndUpdate(id,req.body,{new:true});

    return res.status(500).json({userUpdate});
      } 
catch (error) {
          console.log(error);
          return res.status(500).json(error); 
      }
}

export const deleteUser = async(req,res)=>{
    try {
        
        const id = req.params.id;
        const userExsist = await User.findById(id);

        if(!userExsist){
            return res.status(500).json("user is not found");
        }

        const user = await User.findByIdAndDelete(id);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}