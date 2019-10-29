import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoList = ["Do projects", "Complete MVP"];
const completed = [];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
        super(props);
        this.state = {
            todoList,
            completed,
            inputValue: "",
        };
    }

    completedHandler = event => {
        event.preventDefault();
        console.log(event.target.id)
        let index = this.state.todoList.indexOf(event.target.id);
        let pretendTodoList = this.state.todoList;
            this.setState({completed: [...this.state.completed, pretendTodoList.splice(index, 1)]});
            this.setState({todoList: this.state.todoList.filter(element => {
                return !this.state.completed.includes(element);
            })})
            console.log(todoList)
    }

    clearCompletedHandler = event => {
        event.preventDefault();
        this.setState({completed: []});
    }

    /*
    incompleteHandler = event => {
        event.preventDefault();
        this.setState({todoList: [...this.state.todoList, completed.splice]})
    } */
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
      <div className="container">
        <div className="paper"> </div>
        <h2>My Todo List: MVP</h2>
        <TodoList todoList={this.state.todoList} completed={this.state.completed} completedHandler={this.completedHandler}/>
        <br />
        <TodoForm submitHandler={this.listSubmitHandler} changeHandler={this.inputChangeHandler} clearHandler={this.clearCompletedHandler}  />
      </div>
    );
  }
}

export default App;
