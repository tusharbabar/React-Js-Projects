import React from "react";
import ReactDom from "react-dom";
import{BrowserRouter, NavLink, Routes,Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";


let App=()=>{
  return<>
  <BrowserRouter>
  <nav className="navbar navbar-expand-lg navbar-light bg-light border p-4">
      <NavLink className="nav-link" to="/">User Appp</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="">Home</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item active">
         <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
<Routes>
   <Route path="/" element={<Home/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />




</Routes>
    </BrowserRouter>
  </>
}
export default App;