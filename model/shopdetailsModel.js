const mongoose = require('mongoose');

const shopDetailsSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    shopAddress: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ShopDetails = mongoose.model('ShopDetails', shopDetailsSchema);

module.exports = ShopDetails;
