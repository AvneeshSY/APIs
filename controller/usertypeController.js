const { error } = require("console");
const usertypeDetails = require("../model/usertypeModel");

async function usertypeController(req, res) {
    try {
        const { serviceProvider, customer } = req.body;

        if (!serviceProvider && !customer) {
            return res.status(400).json({
                message: "Either serviceProvider or customer must be provided.",
                error: true,
                success: false
            });
        }

        if (serviceProvider && customer) {
            return res.status(400).json({
                message: "Cannot provide both serviceProvider and customer. Choose one.",
                error: true,
                success: false
            });
        }

        const newusertypedetails = new usertypeDetails({
            serviceProvider,
            customer
        });

        const saveusertypedatails = await newusertypedetails.save();
        res.status(201).json({
            message: "usertypeDetails saved successfully",
            data: saveusertypedatails,
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

// GET API

async function getallusertypeController(req,res){
    
    try{ 
        const getalluser= await usertypeDetails.find();
        res.status(200).json({
            message:"Data Fetch Successfully",
            data:getalluser,
            error:false,
            success:true
        })
    
    
    }
    catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false

        })
        
    
}}

// Update API
async function updateUsertypeDetailsController(req, res) {
    try {
        const { id } = req.params;
        const { serviceProvider, customer } = req.body;

        if (!serviceProvider && !customer) {
            return res.status(400).json({
                message: "Either serviceProvider or customer must be provided.",
                error: true,
                success: false
            });
        }

        if (serviceProvider && customer) {
            return res.status(400).json({
                message: "Cannot provide both serviceProvider and customer. Choose one.",
                error: true,
                success: false
            });
        }

        const updatedUsertypeDetails = await usertypeDetails.findByIdAndUpdate(
            id,
            { serviceProvider, customer },
            { new: true, runValidators: true }
        );

        if (!updatedUsertypeDetails) {
            throw new Error("Usertype details not found");
        }

        res.status(200).json({
            message: "usertypeDetails updated successfully",
            data: updatedUsertypeDetails,
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

module.exports = { usertypeController,getallusertypeController, updateUsertypeDetailsController };
