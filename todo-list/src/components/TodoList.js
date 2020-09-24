import React from "react";
import InputForm from "./InputForm";

export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  render() {
    return (
      <div>
        <InputForm onSubmit={this.addTodo} />
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}
