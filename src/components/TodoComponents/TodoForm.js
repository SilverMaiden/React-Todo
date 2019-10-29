import React from 'react';

const TodoForm = props => {
        return (
            <>
                <form >
                    <input name="todo" id="todo" placeholder="todoList" onChange={props.changeHandler} />
                    <button onClick={props.submitHandler}> Add Todo </button>
                    <button> Clear Completed </button>
                </form>
            </>
        )
}

export default TodoForm;
