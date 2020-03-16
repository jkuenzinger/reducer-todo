import React, {useReducer, useState} from 'react';
import Todo from './Todo';
import {listReducer, intialState} from '../redcuers/listReducer';


const ToDoForm = () =>{
const [todo, setTodo] = useState('');

return(
    <div>
        <h1>To Do's</h1>
        <form>
            <label htmlFor='todo'>Add Todo</label>
            <input/>
        </form>
    </div>
)
}

export default ToDoForm;