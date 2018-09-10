import React, {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";


function renderMenuItem(value) {
  return <option value={value} key={value}>{value}</option>
}

export class HintSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {myValue: ''};
  }

  handleChange = event => {
    this.setState({myValue: event.target.value})
  };

  render() {
    const renderedMenu = this.props.choices.map(choice => renderMenuItem(choice));
    return <div className="HintSelector">
      <Select value={this.state.myValue} onChange={(event) => this.handleChange(event)}>
        {renderedMenu}
      </Select>
      <Button className="hint" variant="contained" color="primary" onClick={() => this.props.giveHintFunction(this.state.value)}>
        {this.props.title}
      </Button>
    </div>;
  }
}