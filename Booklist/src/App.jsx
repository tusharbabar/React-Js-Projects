import React from "react";
import ReactDom from "react-dom";


class App extends React.Component {
  render() {
    return (
      <div className="book-container">
        <h3>BookList</h3>
        <ol>
          <li>JAVA</li>
          <li>NET</li>
          <li>PHP</li>
          <li>NODE</li>
          <li>PYTHON</li>
          <li>HTML CSS JS</li>
        </ol>
      </div>
    );
  }
}

export default App;
