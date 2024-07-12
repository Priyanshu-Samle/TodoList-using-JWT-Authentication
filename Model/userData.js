import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    userName:{
        type: String,
         required:true
    },

    password:{
        type: String,
         required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type: String,
         required:true
    }

    
})

export default mongoose.model("Todolist",userSchema)