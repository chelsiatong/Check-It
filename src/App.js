import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';
import Notes from './components/NoteSection/notes/notes';
import ToDoList from './components/ToDo/todolist/todolist';
import About from './components/about/about';
import { useState } from 'react';
// import { Link } from 'react-scroll';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    // <div>
    //   <Header />
    //   <Link to="/" spy={true} smooth={true} offset={50} duration={500} ><Home /></Link>
    //   <Link to="/notes" spy={true} smooth={true} offset={50} duration={500} ><Notes /></Link>
    //   <Link to="/todo" spy={true} smooth={true} offset={50} duration={500} ><ToDoList/></Link>
    //   <Link to="/about" spy={true} smooth={true} offset={50} duration={500} ><About /></Link>
    // </div>
    <BrowserRouter>
      <div className={`${darkMode ? 'dark-mode' : 'day'}`}  >
        <Header handleDarkMode={setDarkMode} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/notes' component={Notes} />
          <Route path='/todo' component={ToDoList} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter >

  );
}

export default App;
