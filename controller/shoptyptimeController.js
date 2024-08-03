const { error } = require("console");
const shoptyptimeDetails=require("../model/shoptyptimeModel")

async function shoptyptimeController(req,res){
    try {
        const{shopType,shopopeningTime,shopclosingTime,shopDescription}=req.body;
        if (!shopType) {
            throw new Error("Please Enter the shopType");
        }
        if (!shopopeningTime) {
            throw new Error("Please Enter the shopopeningTime");
        }
        if (!shopclosingTime) {
            throw new Error("Please Enter the shopclosingTime");
        }
        if(!shopDescription){
            throw new Error("Please Enter the shopDescription")
        }

        const newshoptyptimeDetails= new shoptyptimeDetails({
            shopType,
            shopopeningTime,
            shopclosingTime,
            shopDescription
        })
        const savedShopDetails=await newshoptyptimeDetails.save();

        res.status(201).json({
            message: "shoptyptimeDetails saved successfully",
            data: savedShopDetails,
            error: false,
            success: true
        });

        
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
        
    }
}
//.................GET API...........................

async function getallshoptyptimeController(req,res){
   
    try {
        const getshoptyptimeList= await shoptyptimeDetails.find()
        res.status(200).json({
            message:"Shop details retrieved successfully",
            data:getshoptyptimeList,
            error:false,
            success:true

        })
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false

        })
        
    }
}



//...................Update Api.......................

async function updateShoptyptimeController(req, res) {
    try {
        const { id } = req.params;
        const { shopType, shopopeningTime, shopclosingTime, shopDescription } = req.body;

        if (!shopType) {
            throw new Error("Please Enter the shopType");
        }
        if (!shopopeningTime) {
            throw new Error("Please Enter the shopopeningTime");
        }
        if (!shopclosingTime) {
            throw new Error("Please Enter the shopclosingTime");
        }
        if (!shopDescription) {
            throw new Error("Please Enter the shopDescription");
        }

        const updatedShopDetails = await shoptyptimeDetails.findByIdAndUpdate(
            id,
            { shopType, shopopeningTime, shopclosingTime, shopDescription },
            { new: true, runValidators: true }
        );

        if (!updatedShopDetails) {
            throw new Error("Shoptyptime details not found");
        }

        res.status(200).json({
            message: "Shoptyptime details updated successfully",
            data: updatedShopDetails,
            error: false,
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = {
    shoptyptimeController,
    updateShoptyptimeController,
    getallshoptyptimeController
};
// module.exports=shoptyptimeController;