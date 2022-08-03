import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';
import Notes from './components/NoteSection/notes/notes';
import ToDoList from './components/ToDo/todolist/todolist';
import About from './components/about/about';


function App() {
  return (
    // <div>
    //   <Header />
    //   <Home />
    //   <Notes />
    //   <Calendar />
    //   <About />
    // </div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/notes' component={Notes} />
        <Route path='/todo' component={ToDoList} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
