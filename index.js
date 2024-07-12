import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import nodemon from "nodemon"
import  dotenv  from "dotenv"
import route from "./Route/route.js"

const app = express();

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT||6000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then((req,res)=>{
    app.listen(PORT, ()=>{
        console.log("Successful db connection is done");
       // return res.status(200).json({message:"success"});
    })
}).catch((error)=>{
    console.log("Error is come");
    return res.status(500).json(error);
})
console.log("success");
app.use("/api/dbConnection",route);