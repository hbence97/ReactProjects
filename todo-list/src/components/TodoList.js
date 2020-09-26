import React from "react";
import InputForm from "./InputForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllTodo: true,
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos],
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = string => {
    this.setState({
      todoToShow: string,
    });
  };

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    }));
  };

  deleteCompletedTodo = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete),
    }));
  };

  toggleAll = () => {
    this.setState(state => ({
      todos: state.todos.map(todo => ({
        ...todo,
        complete: state.toggleAllTodo,
      })),
      toggleAllTodo: !state.toggleAllTodo,
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <InputForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            deleteTodo={() => this.deleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <button onClick={this.deleteCompletedTodo}>
              Delete completed todos
            </button>
          </div>
        ) : null}
        <div>
          <button onClick={this.toggleAll}>
            Toggle all complete: {`${this.state.toggleAllTodo}`}
          </button>
        </div>
      </div>
    );
  }
}
