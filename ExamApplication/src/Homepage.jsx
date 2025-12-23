import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h2 className="mb-4">Welcome to the Exam Application</h2>
        <div className="card mx-auto" style={{ maxWidth: "600px" }}>
          <img  src="https://images.unsplash.com/photo-1752880051996-9b116757b970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
             className="card-img-top"
            style={{ height: "300px", objectFit: "cover" }}
            alt="Welcome"
          />
          <div className="card-body">
            <p className="card-text">
              Best Of Luck.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
