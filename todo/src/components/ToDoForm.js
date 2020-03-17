import React, {useReducer, useState} from 'react';
import Todo from './Todo';
import {listReducer, intialState} from '../reducers/ReducerForList';

// here i am going to import react use reducer and usestate becuase i will be using all of those.
// I am them importing in my Todo Divs that are being created in the Todo Component
// I am also importing my listReducer fruntion and intial state from the Reducer where i st my intial state for the page
// below I am then creating a ToDoForm function I will be handle the input state buttons and list to display on the dom
// So i set the state using dispatch and linking it up with my ListReducer and intial state i set up in the reducer function
const ToDoForm = () =>{
    const [state, dispatch] = useReducer(listReducer, intialState);
    const [todo, setTodo] = useState('');

// below i will setup HandleChanges to handle what is typed into the input below
    const handleChanges = event => {
        setTodo(event.target.value);
    }
// handleSubmit is goin to use dispatch to use the case  Add-TODO which is setup in my reducer function  
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD-TODO', payload: todo})
    }
// handleClear is going to use dispatch again so that i can use the REMOVE function that i have set up in reducers
    const handleClear = event => {
        event.preventDefault();
        dispatch({type: 'REMOVE', payload:todo})
    }
return(
// below we are returning a div that is goin to contain a todo for each item I have created in todos creating a list of todo items
// I am then setting up a for with a lable of ADD Todo and setting it up to take in an item and use the handle changes to create a useState
// for whatever is typed into the add field.  There is then abutton that runs Handle Sumbmit which access the todo and reducer functions
// to add a new item tot he list and render it on the dom
// I am also bringing in handle clear so that it access that funciton in the reducer to remove the items that have been toggled to compeleted.
    <div>
        <h1 className='headerTitle'>Hogwarts Spell Mastery Guide</h1>
        <Todo id={state.id} todo={todo} dispatch={dispatch} state={state}/>
       <div className='formStyles'>
        <form className='formitemsstyles'>
            <label htmlFor='todo'>Spell's to Master</label>
            <input id='todo' name='todo' type='text' value={todo} onChange={handleChanges}/>
            <button className='addbuttonstyle' onClick={handleSubmit}>Add Spell</button>
            <button className='clearbuttonstyle' onClick={handleClear}>Clear Mastered Spells</button>
        </form>
        </div>
    </div>
)
}

export default ToDoForm;