import React from "react";
import ReactDom from "react-dom";

export default class Viewproduct extends React.Component{
    render(){
        return<>
    
 <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Sr.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>delete</td>
      <td>Update</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>delete</td>
      <td>Update</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>delete</td>
      <td>Update</td>
    </tr>
  </tbody>
</table>






 



 </>
    }
} 