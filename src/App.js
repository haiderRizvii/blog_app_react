import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useEffect, useState } from 'react';
import dotenv from 'dotenv';

import { UserContext } from './Contexts/UserContext';

import  Navbar from './components/Navbar'
import  About from './pages/About'
import Notfound from './pages/404';
import Home from './pages/Home';
import Footer from './components/Footer';
import CreatePost from './posts/CreatePost';
import BlogDetails from './posts/BlogDetails';
import SignInForm from './auth/Signup';
import LoginForm from './auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PostViews from './posts/PostViews';

dotenv.config();

function App() {
  const [user, setUser] = useState({})

  const handleLogin = (user) => {
    setUser(user)
  }
  localStorage.setItem("user", user);
  console.log(user)

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login">
            <LoginForm handleLogin={handleLogin}/>
          </Route>
          <ProtectedRoute path="/create" component={CreatePost} />
          {/* {localStorage.isAuthenticated? <ProtectedRoute path="/posts/:id" component={BlogDetails} />: <Route path="/posts/:id" component={BlogDetails} />} */}
          <Route path="/posts/:id" component={BlogDetails} />
          <Route path="/register">
            <SignInForm handleLogin={handleLogin}/>
          </Route>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exect path="/posts" component={PostViews} />
          <Route component={Notfound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
