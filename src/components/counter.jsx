import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  render() {
    return (
      <div>
        <h4>Order # {this.props.counter.id}</h4>
        <span> {this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "fontSize: 30, fontWeight:'bold', backgroundColor: ";
    classes += this.propscounter.value === 0 ? "'red'" : "'blue'";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
