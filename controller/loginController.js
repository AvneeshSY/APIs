const bcrypt = require("bcryptjs");
const signupModel= require("../model/signupModel");

async function loginController(req,res){
    try {
        const{Email,Password}=req.body;
        if(!Email){
            throw new Error("Please Entter the Email")
        }
        if(!Password){
            throw new Error("Please Enter the Password")
        }

        const user =await signupModel.findOne({Email})

        if(!user){
            throw new Error("User not found with this Email")

        }
        const isPasswordMatch = await bcrypt.compare(Password, user.Password);
        if (!isPasswordMatch) {
            throw new Error("Password is incorrect.");
        }
        res.status(201).json({
            // data:saveUser,
            success:true,
            error:false,
            message:"User login successfully"
        })
    } catch (err) {
        res.json({
            message:err.message || err,
            error:true,
            success:false,
        })
    }
}
module.exports=loginController;