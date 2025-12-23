import React from "react";
import ReatDom from "react-dom";


class App extends React.Component {


  constructor() {
    super();
    this.state = {
      first: "",
      second: "",
      result: ""
    }
  }
  render() {
    return <>
    <h1 className="cdn">Calculator</h1>
      <div className="container mt-5 p-5 bg-dark">
        <div className="form-group">
          <input type='text' name='first' value={this.state.first} className="form-control ctrl"
            placeholder="Enter First Value" onChange={(e) => this.setState({ first: e.target.value })} />
        </div>

        <div className="form-group">
          <input type='text' name='second' value={this.state.second}
            className="form-control" placeholder="Enter Second Value" onChange={(e) => this.setState({ second: e.target.value })} />
        </div>

        <div className="form-group">
          <h1 className="text-white">Result is {this.state.result} </h1>
        </div>



        <div className=" gap-5 flex-wrap mt-3 controls">
          <button className="btn btn-success cdn" onClick={() => this.setState({ result: parseInt(this.state.first) + parseInt(this.state.second) })}>Addition</button>
          <button className="btn btn-primary" onClick={() => this.setState({ result: parseInt(this.state.first) - parseInt(this.state.second) })}>Subtraction</button>
          <button className="btn btn-info"    onClick={() => this.setState({ result: parseInt(this.state.first) * parseInt(this.state.second) })}>Multiplication</button>
          <button className="btn btn-danger"  onClick={() => this.setState({ result: parseInt(this.state.first) / parseInt(this.state.second) })}>Division</button>
        </div>


      </div>

    </>
  }



}
export default App;


