import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
    constructor(){
      super();
      this.state={
         DarkMode:false
      }
    }
    changeTheme=()=>{
       this.setState({DarkMode:!this.state.DarkMode});
    }
   render(){
    return  <>
    <div className={this.state.DarkMode?'app dark':'app red'}>
           <h1> {this.state.DarkMode ? "I am red Theme":"I am black Theme"}</h1>
           <button onClick={this.changeTheme}>Switch To {this.state.DarkMode ? 'black':'red '} Mode </button>
      </div>
         </>
   }
}

export default App;



