import React from "react";

export default class Addquestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            optionfirst: "",
            optionsecond: "",
            optionthird: "",
            optionfourth: "",
            coption: ""
        };
    }

    savequestion = () => {
        this.props.getquestion(this.state);

        // Reset form
        this.setState({
            name: "",
            optionfirst: "",
            optionsecond: "",
            optionthird: "",
            optionfourth: "",
            coption: ""
        });
    };

    render() {
        return (
            <>
                <div className="form-group">
                    <h1>Add New Question</h1>
                </div>

                <div className="form-group border border-dark">
                    <input type="text"name="name" value={this.state.name} className="form-control" placeholder="Enter Question"
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div className="form-group border border-dark">
                    <input type="text" name="optionfirst" value={this.state.optionfirst} className="form-control" placeholder="Option 1"
                        onChange={(e) => this.setState({ optionfirst: e.target.value })}/>
                </div>

                <div className="form-group border border-dark">
                    <input
                        type="text" name="optionsecond" value={this.state.optionsecond} className="form-control" placeholder="Option 2"
                         onChange={(e) => this.setState({ optionsecond: e.target.value })}/>
                </div>

                <div className="form-group border border-dark">
                    <input type="text" name="optionthird" value={this.state.optionthird}className="form-control"placeholder="Option 3" 
                      onChange={(e) => this.setState({ optionthird: e.target.value })}/>
                </div>

                <div className="form-group border border-dark">
                    <input type="text" name="optionfourth" value={this.state.optionfourth} className="form-control"placeholder="Option 4"
                     onChange={(e) => this.setState({ optionfourth: e.target.value })} />
                </div>

                <div className="form-group border border-dark">
                    <select className="form-control" name="coption" value={this.state.coption} onChange={(e) => this.setState({ coption: e.target.value })}>
                        <option value="">Choose Correct Option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </select>
                </div>

                <div className="form-group border border-dark">
                    <input type="button"name="s" id="btn" value="Add Question" className="form-control btn btn-success"
                        onClick={this.savequestion} />
                </div>
            </>
        );
    }
}
