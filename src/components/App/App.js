import React, { Component } from 'react';
import Overview from '../Overview/Overview';
import uniqid from 'uniqid';
// import '../../styles/style.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        count: 1,
      },
      tasks: [],
      edit: false

    };


    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDelete (n, e) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== n),
    });
  }

  handleEdit = (e) => {
    this.setState({
      edit: true
    })
  }

  submitEditTask = (id, newName) => {
    this.setState({
      edit: false,
      task: this.state.tasks.map(task => {
        if (task.id === id) {
          task.text = newName
        }
        return task
      })
    })

    console.log('id = ', id);
    console.log('name = ', newName);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        count: this.state.task.count,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        count: this.state.task.count + 1,
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add task</button>
        </form>
        <Overview 
          tasks={tasks}
          onClick={this.handleDelete}
          showSubmit={this.handleEdit}
          edit={this.state.edit}
          submit={this.submitEditTask}
          change={this.handleChange} />
      </div>
    );
  }
}

export default App;
