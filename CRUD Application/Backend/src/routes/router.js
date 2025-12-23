 let express=require("express");
 let ctrl=require("../controler/prodctrl.js");
 let upload=require("../middleware/uploadmiddleware.js");
 let router=express.Router();

 router.post("/newprod",ctrl.Saveprod);
router.get("/getproducts",ctrl.getproducts);

 module.exports=router;























module.exports=router;