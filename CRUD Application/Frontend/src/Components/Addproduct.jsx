
import React from "react";
import ReactDom from "react-dom";




export class AddProduct extends React.Component {
  render() {
    return (
      <div className="container mt-4  ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-secondary text-dark text-center">
                <h4>Add New Product</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-2">
                    <label htmlFor="productName" className="form-label"> Name </label>
                    <input type="text" className="form-control border-secondary" id="productName" placeholder="Enter product name" />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="productPrice" className="form-label">  Price</label>
                    <input type="number" className="form-control border-secondary" id="productPrice" placeholder="Enter price"/>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="productDescription" className="form-label"> Description</label>
                    <textarea className="form-control border-secondary"  id="productDescription" rows="3" placeholder="Enter description"></textarea>
                  </div>
                    <br />  
                  <div className="d-grid mb-2" style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                    <button type="submit" className="btn btn-success">
                      Submit Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
