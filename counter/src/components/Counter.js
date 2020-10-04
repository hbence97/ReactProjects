import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <div className="counter">{this.state.counter}</div>

        <div className="button">
          <ul>
            <li>
              <button onClick={this.decrement}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="increment">-1</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="button">
          <ul>
            <li>
              <button onClick={this.increment}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="increment">+1</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
