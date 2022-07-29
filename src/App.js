import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  counter = 1;
  constructor() {
    super();
    this.state = {
      task: {
        text: "",
        id: uniqid(),
        index: this.counter,
        editTask: false,
      },
      tasks: [],
    };
  }

  handleEdit = (id) => {
    const filteredTasks = this.state.tasks.filter((task) => task.id !== id);
    const selectedTask = this.state.tasks.find((task) => task.id === id);
    console.log(selectedTask);
    this.setState({
      task: {
        task: selectedTask.title,
        id: id,
        index: this.counter,
        editTask: true,
      },
      tasks: filteredTasks,
    });
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });

    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter((task) => task.id !== id);
    // this.setState({
    //   tasks,
    // });
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.counter++;
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
        index: this.counter,
        title: this.state.task,
        editTask: false,
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
            value={task.text || ""}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            {task.editTask ? "Edit task" : "Add task"}
          </button>
        </form>
        <Overview
          tasks={tasks}
          delete={this.deleteTask}
          edit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
