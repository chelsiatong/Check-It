import Header from './components/header/header';
// import Home from './pages/home';
// import Notes from './components/notes/notes';
// import Calendar from './components/calendar/calendar';
// import About from './components/about/about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        {/* <Route path='/notes' component={Notes} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/about' component={About} /> */}
      </Switch>
    </Router>

  );
}

export default App;
