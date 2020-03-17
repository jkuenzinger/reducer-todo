import React from 'react';

// Here we are making the Todo assigning it some props and createding the handleToggle which will take in id as props then 
// it will dispatch and change the type to Completed of the recieved id
const Todo = (props =>{
    const handleToggle = (id) => {
        props.dispatch({type:'COMPLETED', id:id})
    }

// below in the return we are goign to return a div and we are going to map through the todo that exist in state and create
// a div for each todo setting the key to the id and creating an h3 in each div containing the item that is to be on the todo list
// we are also using teh handleToggle as an onclick for the div toggling it between completed or not using the todo unique id for 
// each div that is clicked
    

    return(
        <div className='spelldiv'>
            {props.state.map(todo =>{
                return(
                 <div className={`todo${todo.completed} ? 'COMPLETED' : ""`} onClick={() => handleToggle(todo.id)} key={todo.id}>
                     <h3>{todo.item}</h3>
                </div>
                )
            })}
        </div>
    )
})

export default Todo;