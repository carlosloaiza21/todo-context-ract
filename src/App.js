import React, {useState} from 'react';
import './App.css';
import SearchInput from './Components/Searchinput'
import AppBar from './Components/AppBar';
import {TodoContext} from './TodoContext'; 
import ListItems  from './Components/ListItems'


const App=()=> {

  const [task, setTask] = useState([]);

  
  return (
    <TodoContext.Provider value={{
      task,
      setTask
    }}>
    <div className="App">
      <AppBar title="TODO APP"/>
      <header className="App-header">
        <SearchInput />
        <ListItems />
      </header>
    </div>
    </TodoContext.Provider>
  );
}

export default App;
