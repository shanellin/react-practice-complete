import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component{
  state = {
    todos: [
      {id:1, content:'shanelin'},
      {id:2, content:'marvel'},
      {id:3, content:'captain'},
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((item) => {
      return item.id !== id;
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let temp = [...this.state.todos, todo];
    this.setState({
      todos: temp
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos'</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
