import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/Navbar/Navbar';
import Pools from './pages/pools';
import Footer from './components/Footer/Footer';
import PoolsDetail from './pages/poolsDetail';


const App = () => {


  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pools">
            <Pools />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
