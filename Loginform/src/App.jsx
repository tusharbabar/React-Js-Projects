import React from "react";

class App extends React.Component {
  show = () => {
    alert("Login successfully");
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Login Form</h2>
          <form onSubmit={(e) => { e.preventDefault(); this.show(); }}>
            <input type="email" placeholder="Email Address" required /><br />
            <input type="password" placeholder="Password" required /><br /><br />

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <br />
            <button type="submit">Login</button>
          </form>
          <br />
          <p className="signup-link">
            Not a member? <a href="#">Signup now</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
