import React from "react";
import "./Calculator.css";

export default class Calculator extends React.Component {
  state = {
    input: "",
    currentSum: 0,
    savedCalculation: localStorage.getItem("Saved calculation"),
  };

  inputNumber = e => {
    let currentValue = e.target.value;
    this.setState({
      input: this.state.input + currentValue,
    });
  };

  deleteNumber = () => {
    const currentInput = document.getElementById("currentInput").value;
    document.getElementById("currentInput").value = currentInput.substring(
      0,
      currentInput.length - 1
    );
    this.setState({
      input: (document.getElementById(
        "currentInput"
      ).value = currentInput.substring(0, currentInput.length - 1)),
    });
  };

  deleteAll = () => {
    this.setState({
      input: "",
      currentSum: 0,
    });
  };

  saveToLocalStorage = () => {
    localStorage.setItem("Saved calculation", this.state.currentSum);
    const savedValueViaLocalStorage = localStorage.getItem("Saved calculation");
    this.setState({
      savedCalculation: savedValueViaLocalStorage,
    });
  };

  clearLocalStorage = e => {
    e.preventDefault();
    localStorage.removeItem("Saved calculation");
    this.setState({
      savedCalculation: "",
    });
  };

  addition = () => {
    const currentInput = parseInt(
      document.getElementById("currentInput").value
    );
    if (this.state.input === "" && this.state.currentSum === 0) {
      this.setState({
        currentSum: 0,
        input: "",
      });
    }
    // eslint-disable-next-line
    if (!currentInput == "") {
      this.setState({
        currentSum: this.state.currentSum + currentInput,
        input: "",
      });
    }
  };

  substraction = () => {
    const currentInput = parseInt(
      document.getElementById("currentInput").value
    );
    if (this.state.input === "" && this.state.currentSum === 0) {
      this.setState({
        currentSum: 0,
        input: "",
      });
    }
    // eslint-disable-next-line
    if (!currentInput == "") {
      this.setState({
        currentSum: this.state.currentSum - currentInput,
        input: "",
      });
    }
  };

  multiplication = () => {
    const currentInput = parseInt(
      document.getElementById("currentInput").value
    );
    if (this.state.input === "" && this.state.currentSum === 0) {
      this.setState({
        currentSum: 1,
        input: "",
      });
    }
    // eslint-disable-next-line
    if (!currentInput == "" && this.state.currentSum == 0) {
      this.setState({
        currentSum: currentInput,
        input: "",
      });
      // eslint-disable-next-line
    } else if (!currentInput == "") {
      this.setState({
        currentSum: this.state.currentSum * currentInput,
        input: "",
      });
    }
  };

  division = () => {
    const currentInput = parseInt(
      document.getElementById("currentInput").value
    );
    if (this.state.input === "" && this.state.currentSum === 0) {
      this.setState({
        currentSum: 1,
        input: "",
      });
    }
    // eslint-disable-next-line
    if (!currentInput == "" && this.state.currentSum == 0) {
      this.setState({
        currentSum: currentInput,
        input: "",
      });
      // eslint-disable-next-line
    } else if (!currentInput == "") {
      this.setState({
        currentSum: this.state.currentSum / currentInput,
        input: "",
      });
    }
  };

  render() {
    return (
      <div className="interface-root">
        <span className="saved-calculation-span">Last saved result</span>
        <form className="saved-calculation">
          <input
            id="saved-calculation"
            type="number"
            value={this.state.savedCalculation}
            placeholder="Save a calculation"
            readOnly
          />
          <button onClick={this.clearLocalStorage}>
            <i className="fa fa-times-circle fa-2x"></i>
          </button>
        </form>
        <form className="input">
          <input
            onChange={this.handleChange}
            readOnly
            value={this.state.input}
            id="currentInput"
            type="number"
            placeholder="Enter numbers"
          />
        </form>
        <form className="result">
          <input
            value={this.state.currentSum}
            id="currentResult"
            readOnly
            type="number"
            placeholder="Result"
          />
        </form>
        <div className="operations-button">
          <button onClick={this.addition}>+</button>
          <button onClick={this.substraction}>-</button>
          <button onClick={this.multiplication}>x</button>
          <button onClick={this.division}>/</button>
        </div>
        <div className="numbers-button">
          <button onClick={this.inputNumber} value="1">
            1
          </button>
          <button onClick={this.inputNumber} value="2">
            2
          </button>
          <button onClick={this.inputNumber} value="3">
            3
          </button>
          <br />
          <button onClick={this.inputNumber} value="4">
            4
          </button>
          <button onClick={this.inputNumber} value="5">
            5
          </button>
          <button onClick={this.inputNumber} value="6">
            6
          </button>
          <br />
          <button onClick={this.inputNumber} value="7">
            7
          </button>
          <button onClick={this.inputNumber} value="8">
            8
          </button>
          <button onClick={this.inputNumber} value="9">
            9
          </button>
          <br />
          <button className="zero-button" onClick={this.inputNumber} value="0">
            0
          </button>
        </div>
        <div className="delete-buttons">
          <button onClick={this.deleteNumber} className="delete-number">
            DELETE NUMBER
          </button>
          <button onClick={this.deleteAll} className="delete-all">
            DELETE ALL
          </button>
        </div>
        <div className="save-button">
          <button onClick={this.saveToLocalStorage}>Save the result</button>
        </div>
      </div>
    );
  }
}
