import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import  Navbar from './components/Navbar'
import  About from './pages/About'
import Notfound from './pages/404';
import Home from './pages/Home';
import Footer from './components/Footer';
import CreatePost from './posts/CreatePost';
import BlogDetails from './posts/BlogDetails';
import { useEffect, useState } from 'react';
import SignInForm from './auth/Signup';
import LoginForm from './auth/Login';

function App() {
  //const [user, setUser] = useState({})
  //const [form, setForm] = useState("")
  const [user, setUser] = useState({})


  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     fetch(`http://localhost:3003/auto_login`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setUser(data)
  //       // console.log(data)
  //     })
  //   }
  // }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  console.log(user)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginForm} handleLogin={handleLogin}/>
        <Route path="/create" component={CreatePost} />
        <Route path="/posts/:id" component={BlogDetails} />
        <Route path="/register" component={SignInForm} />
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
