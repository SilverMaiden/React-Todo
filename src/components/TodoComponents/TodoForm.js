import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

const TodoForm = props => {
        return (
            <>
                <Form>
                <Input className="bar" name="todo" id="todo" placeholder="todoList" onChange={props.changeHandler} />
                <Button onClick={props.submitHandler} > Add Todo </Button>
                <Button onClick={props.clearHandler}> Clear Completed </Button>
                </Form>
            </>
        )
}

export default TodoForm;
