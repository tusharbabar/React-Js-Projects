import React from "react";
import ReactDom from "react-dom";

let Login=()=>{


    return<>
   <div className="Container bg-dark p-5">
    <div className="form-group ">
        <input type="text" name="Email" id="" className="form-control" placeholder="Enter Email" />
    </div>
    <div className="form-group ">
        <input type="password" name="password" id="" className="form-control" placeholder="Enter Password" />
    </div>
    <div className="form-group ">
        <input type="submit" name="s" id="Register" className="form-control" />
    </div>
   
   </div>
    </>
}

export default Login;