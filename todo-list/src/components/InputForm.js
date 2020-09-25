import React from "react";
import shortid from "shortid";

export default class InputForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add-todo"
          autoComplete="off"
        />
        <button onClick={this.handleSubmit}>Add todo</button>
      </form>
    );
  }
}
