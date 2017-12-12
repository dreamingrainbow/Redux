import React from 'react';
import TodoList from './components/TodoList'; 
import TodoForm from './components/TodoForm';
import './App.css';

const App = (props) => {
    return (
      <div>
       <TodoList />
       <TodoForm />
      </div>
    );
}

export default App;
