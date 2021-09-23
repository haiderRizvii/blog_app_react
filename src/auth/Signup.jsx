import React, {useState} from 'react';


const SignInForm = (props) => {

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
        fetch(`http://localhost:3000/users`, {
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
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password"
              className="form-control"
              placeholder="Enter password"
              value={username}
              onChange={handleUsernameChange}
            />
        </div>

        <div className="form-group">
            <label>Again Password</label>
            <input type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
