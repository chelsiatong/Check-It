import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';
import Notes from './components/NoteSection/notes/notes';
import ToDoList from './components/ToDo/todolist/todolist';
import About from './components/about/about';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark-mode' : 'day'}`}  >
        <Header handleDarkMode={setDarkMode} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/notes' component={Notes} />
          <Route path='/todo' component={ToDoList} />
          <Route path='/about' component={About} />
          <Route component={Home} />
        </Switch>
      </div>
    </BrowserRouter >

  );
}

export default App;
