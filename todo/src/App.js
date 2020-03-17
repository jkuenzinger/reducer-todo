import React from 'react';
import ToDoForm from './components/ToDoForm';
import './App.css';
// all we are doing in app.js for this build is importing the ToDoForm with the list of todos and the input and bttons

function App() {
  return (
    <div className="App">
    <ToDoForm/>
    </div>
  );
}

export default App;
