import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Addquestion from "./Addquestion";
import Viewquestion from "./viewquestion";
import AttendExam from "./AttendExam";
import Homepage from "./Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionbank: []
    };
  }

  createquestionbank = (question) => {
    this.setState({
      questionbank: [...this.state.questionbank, question]
    });
  };

  showquestion = () => {
    console.log(this.state.questionbank);
  };

  render() {
    return (
      <BrowserRouter>
        <nav className="Container navbar navbar-expand-lg navbar-dark bg-success p-5">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold text-white text-bold" to="/">
              Exam Application
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/Addquestion">Add Question</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/viewquestion">View Question</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/AttendExam">Attend Exam</NavLink>
                </li>
              </ul>
              <button className="btn btn-outline-light btn-sm" onClick={this.showquestion}>
                Show Questions
              </button>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Homepage questions={this.state.questionbank} />} />
            <Route path="/Addquestion" element={<Addquestion getquestion={this.createquestionbank} />} />
            <Route path="/viewquestion" element={<Viewquestion allquestions={this.state.questionbank} />} />
            <Route path="/AttendExam" element={<AttendExam questions={this.state.questionbank} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
