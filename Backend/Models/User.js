const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Product=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

         email:{
            type:String,
            required:true,
            unique:true
        },
         password:{
            type:String,
            required:true,
        },

         type:{
            type:String,
            required:true,
        },

         bname:{
            type:String,
            required:true,
        },
        paystatus:{
            type:String,
            required:true,
        }

    }
);

const UserModels=mongoose.model('users',Product);

module.exports=Product;