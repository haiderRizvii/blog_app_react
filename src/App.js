import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import  Navbar from './components/Navbar'
import  About from './pages/About'
import  Login from './auth/Login'
import  Signup from './auth/Signup'
import Notfound from './pages/404';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
