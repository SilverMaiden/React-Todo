import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoList = ["Do projects", "complete MVP"];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
        super(props);
        this.state = {
            todoList,
            inputValue: "",
        };
    }

    inputChangeHandler = event => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({inputValue: event.target.value})
    }

    listSubmitHandler = event => {
        console.log(event.target.value);
        event.preventDefault();
        this.setState({todoList: [...this.state.todoList, this.state.inputValue]});
    }


  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.todoList}/>
        <TodoForm submitHandler={this.listSubmitHandler} changeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;
