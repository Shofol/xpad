import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/Navbar/Navbar';


const App = () => {


  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
