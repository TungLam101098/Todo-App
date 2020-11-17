import React, { Component } from "react";
const { v4: uuidv4 } = require('uuid');
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
      this.setState({
          [evt.target.name]: evt.target.value
      })
  }
  handleSubmit(evt){
      evt.preventDefault();
      this.props.createTodo({...this.state, id: uuidv4(), completed: false});
      this.setState({task: ""});
  }
  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          name='task'
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
