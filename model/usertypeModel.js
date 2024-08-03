// const { timeStamps } = require("console");
const mongoose=require("mongoose");
// const { type } = require("os");

const usertypeSchema=new mongoose.Schema({
    serviceProvider:{
        type:String,
        // required:true
    },
    customer:{
        type:String,
        // required:true
    }
},
     {timeStamps:true}
)

const usertypeDetails=mongoose.model("usertypeDetails",usertypeSchema);
module.exports=usertypeDetails;