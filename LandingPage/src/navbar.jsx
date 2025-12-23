import React from "react";
import ReactDom from "react-dom";

class Navbar extends React.Component{
    render(){
        return<>

    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
    <a class="navbar-brand fw-bold fs-3" href="#">VILLA</a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav me-3">
        <li class="nav-item">
          <a class="nav-link active fw-semibold" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">Properties</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">Property Details</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-semibold" href="#">Contact Us</a>
        </li>
      </ul>
      <a class="btn btn-dark fw-semibold px-4" href="https://www.booking.com/villas/city/in/pune.html">Book Slot</a>
    </div>
  </nav><br />
      
  <div className="main">
     <div className="min">
      <h1>Hello Welcome  to Our  <span className="span"> VILLA</span></h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod facilis ducimus est.</p>


     </div>

  </div>
        
        
        
        </>
    }
}

export default Navbar;