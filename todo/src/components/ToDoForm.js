import React, {useReducer, useState} from 'react';
import Todo from './Todo';
import {listReducer, intialState} from '../reducers/ReducerForList';


const ToDoForm = () =>{
    const [state, dispatch] = useReducer(listReducer, intialState);
    const [todo, setTodo] = useState('');

    const handleChanges = event => {
        setTodo(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD-TODO', payload: todo})
    }

    const handleClear = event => {
        event.preventDefault();
        dispatch({type: 'REMOVE', payload:todo})
    }
return(
    <div>
        <h1>To Do's</h1>
        <Todo id={state.id} todo={todo} dispatch={dispatch} state={state}/>
        <form>
            <label htmlFor='todo'>Add Todo</label>
            <input id='todo' name='todo' type='text' value={todo} onChange={handleChanges}/>
            <button onClick={handleSubmit}>Add Todo</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    </div>
)
}

export default ToDoForm;