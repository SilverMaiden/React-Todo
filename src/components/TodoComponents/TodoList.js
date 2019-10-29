// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';


const TodoList = props => {
        return (
            <>
                {props.todoList.map(element => (
                    <p id={element} onClick={props.completedHandler}> {element} </p>
                ))}

                {props.completed.map(element => (
                    <p><strike> {element} </strike></p>
                ))}

            </>

        )
    }

export default TodoList;
