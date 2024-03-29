import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();
  const [email, setUseremail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (evt) => {
    setUseremail(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch(`http://localhost:3003/api/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.setItem("token", data.jwt)
        localStorage.setItem("isAuthenticated", true)
        props.handleLogin(data.user)
    })
    setUseremail("")
    setPassword("")
    history.push('/');
  }

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            className="form-control"
            value={email}
            onChange={handleUsernameChange}
            type="email"
            placeholder="email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={handlePasswordChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
