import React from 'react';
import TodoList from './containers/TodoList';
import TodoDetail from './containers/TodoDetail';
import TodoForm from  './components/TodoForm';
import './App.css';

const App= (props) => {
    return (
      <div>
       <TodoList />
       <TodoDetail />
       <TodoForm />
      </div>
    );
}

export default App;
