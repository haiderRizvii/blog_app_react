import { useEffect, useState, useContext } from "react";
import {
  Link,
  useHistory
} from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";


const Navbar = () => {
  const { user } = useContext(UserContext)
  const history = useHistory();
  const [value, setValue] = useState(false)
  useEffect(() => {
    setValue(localStorage.getItem('token'))
}, [localStorage.getItem('token')])

  const signOut = () => {
    localStorage.clear()
    setValue(false)
    history.push('/');
  }

//  console.log("user:   "+user)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="container-fluid">
          <i class="fas fa-brain fa-2x text-light mr-2 animate__animated animate__flip animate__delay-1s"></i>
          <Link to="/" class="navbar-brand"><b>INFO ZONE</b></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {localStorage.isAuthenticated? <Link class="navbar-brand brand-color text-success">Loged in as: {user.name}</Link>: <></>}
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">About</Link>
              </li>
              {!value?
                <>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/login">Login</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/register">Register</Link>
                  </li>
                </>
                :
                <>
                  <li class="nav-item">
                    <Link class="nav-link active" to="/posts">Posts</Link>
                  </li>
                  <li><input type="button" value="Logout" class="bg-dark text-light mt-1" onClick={signOut} /></li>
                </>

              }
            </ul>
            <form class="d-flex">
              <input class="form-control me-2 ml-5" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
      </div>
    </nav>
   );
}

export default Navbar;
