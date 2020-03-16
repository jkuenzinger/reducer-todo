import React from 'react';
// in out reducer we are going to set up some intial state we are sayign in the intial state there is going to be an item 
// initialized as an empty string we are also intializing with a false state for completed giving it the id of Date.now() so all 
// created will have their own unique id's. We are also intialize them as an empty array so that it can hold all the items created in todo. 
export const intialState=[{
    item:'',
    completed:false,
    id: Date.now(),
    itemArray:[]
}]
// here i making a list reducer that takes in state, and an action I am going to set this up as my  ADD-TODO case this case is 
// going to contain a newTodo stae that is consiting of the item being the action.payload intializing with compeleted as false and 
// it's own custom id 
export const listReducer = (state, action) =>{
    switch(action.type){
        case'ADD-TODO'  :
        const newTodo = {
            item: action.payload,
            completed:false,
            id:Date.now()
        }

  // here we are creating a new array and spreading the state into it and adding the new TODO that was created above
  // we are also setting up a case for completed and a case for remove
  // in the completed case we are filingt there the actions to see which are true and eventually i will be applying a style 
  // to everythign that is true.
        return [...state, newTodo]
        case 'COMPLETED'  :
            return state.map(event => event.id === action.id ? {...event, completed: !event.completed} : event);
   // I am also setting up  a case for REmove which weill filter through and find all the true items and throw state to remove
  // the items from the state and the page should re render and they will be gone      
         case 'REMOVE' :
            return state.filter(event => !event.completed)
                default:
                    throw state;
        }
}