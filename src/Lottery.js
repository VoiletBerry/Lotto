import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [],
    };
  }

  render() {
    return (
      <section className="lottery">
        <h1>{this.props.tittle}</h1>
        <div>balls go here</div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }

  static props = {
    tittle: "Lottery Game",
    maxNum: 40,
    maxSize: 6,
  };

  handleClick() {
    const randomNumber = Math.floor(Math.random() * this.maxNum) + 1;
    return randomNumber;
  }
}

export default Lottery;
