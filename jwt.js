import jwt from "jsonwebtoken";

 export const isAuthoriztion = (req,res,next)=>{

    const token = req.headers.authorization.split(' ')[1];
     console.log(token);
     if(!token){
        return res.status(500).json({message:"Token is not found"});

     }
try {
    
    const decode = jwt.verify(token,process.env.SECREAT);

    req.user = decode;
    next();
} catch (error) {
    console.log(error);
    return res.status(500).json({message:"please send the right token"});
}
}

export const genrateToken = (userData)=>{
    return jwt.sign(userData,process.env.SECREAT);
}
