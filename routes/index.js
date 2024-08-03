const express =require('express');
const { shoptyptimeController, getallshoptyptimeController, updateShoptyptimeController } = require('../controller/shoptyptimeController');
const { shopdetailsController,getAllShopDetails, updatedShopDetailsController } = require('../controller/shopDetails');
const { usertypeController,getallusertypeController, updateUsertypeDetailsController } = require('../controller/usertypeController');
const signupController = require('../controller/signupController');
const loginController = require('../controller/loginController');


const router=express.Router();

router.post("/shopdetails", shopdetailsController);
router.get('/shopdetails', getAllShopDetails);
router.put("/shopdetails/:id", updatedShopDetailsController);
router.post("/shoptypedetails",shoptyptimeController);
router.get("/shoptypedetails",getallshoptyptimeController);
router.put("/shoptypedetails/:id", updateShoptyptimeController);
router.post("/usertypedetails",usertypeController);
router.get("/usertypedetails",getallusertypeController);
router.put("/usertypedetails/:id", updateUsertypeDetailsController);
router.post("/signup",signupController);
router.post("/login",loginController);

module.exports=router;

