const { timestamps } = require("console");
const mongoose =require("mongoose");
const { type } = require("os");


const signupSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    Email:{
        type: String,
        required:true,
        unique:true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
    },
    Address:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true,
        minlength:6
    },
    confirmPassword:{
        type:String,
        // required:true,
        minlength:6
    }


},{
timestamps:true}
)

const signupDetails=mongoose.model("signup", signupSchema)

module.exports=signupDetails;