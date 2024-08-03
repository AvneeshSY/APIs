const mongoose =require("mongoose");
// const { type } = require("os");

const shoptyptimeSchema=new mongoose.Schema({
    shopType:{
        type:String,
        required:true
    },
    shopopeningTime:{
        type:String,
        required:true
    },
    shopclosingTime:{
        type:String,
        required:true
    },
    shopDescription:{
        type:String,
        required:true
    }
},{ timestamps: true });

const shoptyptimeDetails=mongoose.model("shoptyptimeDetails",shoptyptimeSchema)
module.exports=shoptyptimeDetails;
