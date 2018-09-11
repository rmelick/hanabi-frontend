import React from "react";
import Button from "@material-ui/core/Button/Button";
import Select from "@material-ui/core/Select/Select";


function renderMenuItem(value) {
  return <option value={value} key={value}>{value}</option>
}

function consecutiveArray(length) {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(i);
  }

  return array
}

export class PlayDiscardSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {myValue: 0};
  }

  handleChange = event => {
    this.setState({myValue: event.target.value})
  };

  render() {
    const tileIndexes = consecutiveArray(this.props.tiles.length);
    const renderedMenu = tileIndexes.map(index => renderMenuItem(index));
    return <div className="PlayDiscardSelector">
      <Select value={this.state.myValue} onChange={this.handleChange}>
        {renderedMenu}
      </Select>
      <Button className="play" variant="contained" color="primary" onClick={() => this.props.playFunction(this.state.myValue)}>
        Play
      </Button>
      <Button className="discard" variant="contained" color="secondary" onClick={() => this.props.discardFunction(this.state.myValue)}>
        Discard
      </Button>
    </div>;
  }
}