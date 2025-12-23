import React from "react";

class Viewquestion extends React.Component {
  render() {
    const questions = this.props.allquestions;

    return (
      <>
        <div className="table-responsive mt-5">
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Correct Option</th>
              </tr> 
            </thead>
            <tbody>
              {questions.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">No questions added yet.</td>
                </tr>
              ) : (
                questions.map((q, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{q.name}</td>
                    <td>{q.optionfirst}</td>
                    <td>{q.optionsecond}</td>
                    <td>{q.optionthird}</td>
                    <td>{q.optionfourth}</td>
                    <td>
                      {q[`option${["first", "second", "third", "fourth"][parseInt(q.coption) - 1]}`]}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Viewquestion;
