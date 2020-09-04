import React from 'react';

class ClickHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      human: 0,
      robot: 0,
      factory: 0
    };
    this.navigator = this.navigator.bind(this);
  }

  navigator(type) {
    if(this.props.count >= (50 + (50 * type))) {
      if (type == 0) {
        this.setState((prevState) => ({
          human: prevState.human + 1
        }))
      } else if (type == 1) {
        this.setState((prevState) => ({
          robot: prevState.robot + 1
        }))
      } else {
        this.setState((prevState) => ({
          factory: prevState.factory + 1
        }))
      }
      this.props.purchased(type);
    }
    else {
      alert("NOT ENOUGH BOTTLES");
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.navigator(0)}> (50B) Human: {this.state.human} </button>
        <button onClick={() => this.navigator(1)}> (130B) Robot: {this.state.robot} </button>
        <button onClick={() => this.navigator(2)}> (250B) Factory: {this.state.factory}</button>
      </ div>
    )
  }
}

export default ClickHelper;
