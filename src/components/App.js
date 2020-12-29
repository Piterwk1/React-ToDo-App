
import React, {Component} from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'

import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      ToDo App cuda sie dzieja
      <AddTask/>
      <TaskList/>
    </div>
  );
    }
}

export default App;
