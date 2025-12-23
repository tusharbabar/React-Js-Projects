import React from "react";
import ReactDom from "react-dom";

let Register=()=>{


    return<>
    <div className="Container bg-dark p-5">
    <div className="form-group ">
        <input type="text" name="name" id="" className="form-control" placeholder="Enter Name" />
    </div>
    <div className="form-group ">
        <input type="text" name="Email" id="" className="form-control" placeholder="Enter Email" />
    </div>
    <div className="form-group ">
         <input type="password" name="contact" id="" className="form-control" placeholder="Enter contact" />
    </div>
    <div className="form-group ">
         <input type="file" name="photo" id="" className="form-control" />
    </div>
    <div className="form-group ">
         <input type="password" name="password" id="" className="form-control" placeholder="Enter password" />
    </div>
     <div className="form-group ">
         <input type="name" name="username" id="" className="form-control" placeholder="Enter username" />
    </div>
    <div className="form-group ">
         <input type="submit" name="s" id="Register"  className="form-control" />
    </div>
   
   </div>
    </>
}

export default Register;