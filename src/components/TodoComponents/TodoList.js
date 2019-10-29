// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const TodoList = props => {
        return (
            <>
                {props.todoList.map(element => (
                    <li id={element} onClick={props.completedHandler}> {element} </li>
                ))}

                {props.completed.map(element => (
                    <li><strike> {element} </strike></li>
                ))}

            </>

        )
    }

export default TodoList;
