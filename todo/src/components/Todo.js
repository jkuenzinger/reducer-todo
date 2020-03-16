import React from 'react';

const Todo = (props =>{
    const handleToggle = (id) => {
        props.dispatch({type:'COMPLETED', id:id})
    }
    return(
        <div>
            return(
                <div className={`todo${todo.completed} ? 'COMPLETED' : ''`} conClick={() => handleToggle(todo.id)}
                key={todo.id}>
                    <h3>{todo.item}</h3>
                </div>
            )
        </div>
    )
})

export default Todo;