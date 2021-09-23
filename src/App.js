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
import Footer from './components/Footer';
import CreatePost from './posts/CreatePost';
import BlogDetails from './posts/BlogDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={CreatePost} />
        <Route path="/posts/:id" component={BlogDetails} />
        <Route path="/register" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
