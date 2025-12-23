let db = require("../../db.js");

exports.saveprod = async (...prod) => {
    let result = (await db).query("INSERT INTO product (Name, Price, Description) VALUES (?, ?, ?)", [...prod] );
    return result;
};

exports.getproducts=async()=>{
    let result=(await db).query("select *from product");
    return result;
}
