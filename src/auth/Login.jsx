import React, {useState} from 'react'

const LoginForm = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
  }

  const handleSubmit = (evt) => {
      evt.preventDefault()
      fetch(`http://localhost:3000/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              username,
              password
          })
      })
      .then(resp => resp.json())
      .then(data => {
          localStorage.setItem("token", data.jwt)
          props.handleLogin(data.user)
      })
      setUsername("")
      setPassword("")
  }

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>Email address</label>
          <input className="form-control" value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
          </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" onChange={handlePasswordChange} className="form-control" placeholder="Enter password" />
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
