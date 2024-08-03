const shopDetails = require("../model/shopdetailsModel");

async function shopdetailsController(req, res) {
    try {
        const { shopName, ownerName, shopAddress } = req.body;

        if (!shopName) {
            throw new Error("Please Enter the shopName");
        }
        if (!ownerName) {
            throw new Error("Please Enter the ownerName");
        }
        if (!shopAddress) {
            throw new Error("Please Enter the shopAddress");
        }

        const newShopDetails = new shopDetails({
            shopName,
            ownerName,
            shopAddress
        });

        const savedShopDetails = await newShopDetails.save();

        res.status(201).json({
            message: "Shop details saved successfully",
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

// Get all shop details
async function getAllShopDetails(req, res) {
    try {
        const shopDetailsList = await shopDetails.find();
        res.status(200).json({
            message: "Shop details retrieved successfully",
            data: shopDetailsList,
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

// ................UPDATE API.................

async function updatedShopDetailsController(req, res) {
    try {
        const { id } = req.params;
        const { shopName, ownerName, shopAddress } = req.body;

        if (!shopName) {
            throw new Error("Please Enter the shopName");
        }
        if (!ownerName) {
            throw new Error("Please Enter the ownerName");
        }
        if (!shopAddress) {
            throw new Error("Please Enter the shopAddress");
        }

        const updatedShopDetails = await shopDetails.findByIdAndUpdate(
            id,
            { shopName, ownerName, shopAddress },
            { new: true, runValidators: true }
        );

        if (!updatedShopDetails) {
            throw new Error("Shop details not found");
        }

        res.status(200).json({
            message: "Shop details updated successfully",
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
    shopdetailsController,
    updatedShopDetailsController,
    getAllShopDetails
};
