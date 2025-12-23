import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes,NavLink,Link } from "react-router-dom";
import Addproduct from "./Components/Addproduct";
import Viewproduct  from "./Components/Viewproduct";
import Home from "./Components/Home";


export class app extends React.Component {
  render() {
    return <>
      <BrowserRouter>
        <div className="container mt-2 bg-dark p-5 text-white" >
          <nav   class="navbar navbar-expand-lg navbar-dark text-white">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                   <NavLink className="nav-link item" to="/home">Home</NavLink>
                </li>
                <li class="nav-item active">
                  <NavLink className="nav-link item" to="/Addprod">Add New Product</NavLink>
                </li>
                  <li class="nav-item active">
                  <NavLink className="nav-link item" to="/Viewprod">View Product</NavLink>
                </li>
                <li class="nav-item active">
                  <NavLink className="nav-link item" to="/searchprod">Search Product</NavLink>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>







          <Routes>

            <Route path="/home" element={<Home/>} ></Route>
            <Route path="/Addprod" element={<Addproduct/>} ></Route>
            <Route path="/Viewprod" element={<Viewproduct/>} ></Route>
            <Route path="/searchprod" element={<h1>I Am Search component</h1>} ></Route> 





          </Routes>
        </div>
      </BrowserRouter>




    </>


  }
}
export default app;