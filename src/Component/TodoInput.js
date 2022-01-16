import React, { Component } from "react";
import "./TodoInput.css";

class todoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    console.log("change here");
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    // ensure the todo text isnt empty
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default todoInput;
