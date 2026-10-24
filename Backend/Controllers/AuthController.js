const { sign } = require("jsonwebtoken")
const { model } = require("mongoose");
const Product = require("../Models/User");
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');

const signup=async(req,res)=>{
    try{


        const {name,email,password}=req.body;
        const user=await Product.findOne({email})

        if(user){
            return res.status(404).json({message:'User is aldready there'})
        }

        const userModel=new Product({name,email,password});
        userModel.password= await bcry.hash(password,10);

        await userModel.save();

        res.status(201).json({
            message:"Success",
            success:true
        })










    }catch(err){
        res.status(500).json({
            message:"Something is wrong",
            success:false
        })


    }




    
}


const signin=async(req,res)=>{
    try{


        const {name,email,password}=req.body;
        const user=await Product.findOne({email})

        if(!user){
            return res.status(403).json({message:'User is not there'})
        }

       const isP=await bcrypt.compare(password,user.password);
       if(!isP){
         return res.status(403).json({message:'User is not there'})
       }

       const jwtToke=jwt.sign({email:user.email,id:user_id}
        ,process.env.JWT_SECRET,
        {expiresIn:'24h'}
       )







        res.status(201).json({
            message:"Success",
            success:true,
            jwtToke,
            email,
            name:user.name
        })










    }catch(err){
        res.status(500).json({
            message:"Something is wrong",
            success:false
        })


    }




    
}


























































module.exports={
    signup,
    signin
}