import React, { Component } from "react";
import "./BoxStyle.css";

export default class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      color: "#c9d7ed"
    };
    this.changeColor = this.changeColor.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  render() {
    return (
      <div
        className="box"
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.color }}
      >
        <p>Clicks:{this.state.clicks}</p>
      </div>
    );
  }

  changeColor() {
    this.setState({
      color: this.getRandomColor(),
      clicks: this.state.clicks + 1
    });
  }

  getRandomColor() {
    return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  }
}

export const A = 100;
