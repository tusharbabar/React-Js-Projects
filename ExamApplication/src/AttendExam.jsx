import React from 'react';

class AttendQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      selectedAnswers: [],
      score: 0,
      showResult: false
    };
  }

  handleOptionChange = (e) => {
    let selected = [...this.state.selectedAnswers];
    selected[this.state.currentIndex] = e.target.value;
    this.setState({ selectedAnswers: selected });
  };

  nextQuestion = () => {
    if (this.state.currentIndex < this.props.questions.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  prevQuestion = () => {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  submitExam = () => {
    let score = 0;
    this.props.questions.forEach((q, index) => {
      if (this.state.selectedAnswers[index] === q.correctOption) {
        score++;
      }
    });
    this.setState({ score, showResult: true });
  };

  render() {
    const { questions } = this.props;
    const { currentIndex, showResult, score } = this.state;

    if (questions.length === 0) return <h3 className="text-center">No questions available.</h3>;

    const q = questions[currentIndex];

    return (
      <div className="container mt-5 p-4 shadow bg-black rounded" style={{ maxWidth: "700px" }}>
        {!showResult ? (
          <>
            <h4 className="mb-4">Q{currentIndex + 1}. {q.name}</h4>
            <div className="form-check mb-2 bg-dark">
              <input className="form-check-input" type="radio" name="opt" value={q.optionfirst} onChange={this.handleOptionChange} />
              <label className="form-check-label">{q.optionfirst}</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="opt" value={q.optionsecond} onChange={this.handleOptionChange} />
              <label className="form-check-label">{q.optionsecond}</label>
            </div>
            <div className="form-check mb-2">
              <input className="form-check-input" type="radio" name="opt" value={q.optionthird} onChange={this.handleOptionChange} />
              <label className="form-check-label">{q.optionthird}</label>
            </div>
            <div className="form-check mb-4">
              <input className="form-check-input" type="radio" name="opt" value={q.optionfourth} onChange={this.handleOptionChange} />
              <label className="form-check-label">{q.optionfourth}</label>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" onClick={this.prevQuestion} disabled={currentIndex === 0}>Previous</button>
              <button className="btn btn-secondary" onClick={this.nextQuestion} disabled={currentIndex === questions.length-1}>Next</button>
              <button className="btn btn-success" onClick={this.submitExam}>Submit</button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-success">🎉 Exam Finished!</h2>
            <h4 className="mt-3">Score: <strong>{score}/{questions.length}</strong></h4>
            <h5>Percentage: <strong>{(score / questions.length * 100).toFixed(2)}%</strong></h5>
          </div>
        )}
      </div>
    );
  }
}

export default AttendQuestion;
