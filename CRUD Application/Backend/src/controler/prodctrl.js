let prodmodel = require("../models/prodmodel.js");

exports.Saveprod = (req, res) => {
    let { Name, Price, Description } = req.body;

    prodmodel.saveprod(Name, Price, Description)
        .then((r) => {
            console.log(r);  
            res.send("Product added successfully");
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send("Error saving product");
        });
};

exports.getproducts=(req,res)=>{
    let promise=prodmodel.getproducts();
    promise.then((r)=>{
        if(r[0].length>0){
            return res.status(200).json(r[0]);
        }else{
            return res.status(404).json({error:"Data not found"});
        }
    }).catch((err)=>{
        return res.status(404).json({error:"Something went wrong"});
    });

};