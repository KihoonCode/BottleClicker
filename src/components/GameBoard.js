import React from 'react';
import ClickButton from './ClickButton';
import ClickHelper from './ClickHelper';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      helper: 1
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.purchased = this.purchased.bind(this);
  }

  purchased(type) {
    if (type == 0) {
      this.setState((prevState) => ({
        count: prevState.count - 50,
        helper: prevState.helper + 1
      }))
    } else if (type == 1) {
      this.setState((prevState) => ({
        count: prevState.count - 130,
        helper: prevState.helper + 3
      }))
    } else { // type is factory
      this.setState((prevState) => ({
        count: prevState.count - 250,
        helper: prevState.helper + 6
      }))
    }
  }

  clickHandler(helper) {
    this.setState((prevState) => ({
      count: prevState.count + helper
    }))
  }

  render() {
    return (
      <div>
        <h1> Bottle Clicker </h1>
        <h1> {this.state.count} </h1>
        <div>{this.state.helper} bottle(s) per click</div>
        <ClickButton clickHandler ={this.clickHandler} helper ={this.state.helper}/>
        <hr />
        <ClickHelper purchased ={this.purchased} count ={this.state.count}/>
        <div>Human = 1 extra bottle per click</div>
        <div>Robot = 3 extra bottles per click</div>
        <div>Factory = 6 extra bottles per click</div>
      </ div>
    )
  }
}

export default GameBoard;
