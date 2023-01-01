import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <section className="lottery">
        <h1>{this.props.tittle}</h1>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }

  static defaultProps = {
    tittle: "Lottery Game",
    maxBalls: 6,
    maxNums: 40,
  };

  handleClick() {
    this.setState((currState) => ({
      nums: currState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNums) + 1
      ),
    }));
  }
  
}

export default Lottery;
