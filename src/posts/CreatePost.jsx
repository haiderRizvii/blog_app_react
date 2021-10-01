import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Link
} from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const CreatePost = () => {
  //const notify = () => toast("Wow so easy!");
  const notify = () => {
    toast.success("Yoohoo!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  const { user } = useContext(UserContext)
  const user_id = user.id.toString()

  console.log(user_id)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const post = {title, body, user_id};
    console.log(post)
    fetch('http://localhost:3003/api/v1/posts',{
      method: 'POST',
      headers: {
        "content-Type": "application/json",
        Authorization: localStorage.getItem("token")
    },

      body: JSON.stringify(post)
    }).then(() => {
      history.push('/');
    })
  }
  return (
    <div class="container m-5">
      <h3>Post your ideas</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-group card">
            <input
              type="text"
              placeholder="Ttile"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div class="form-group card">
            <textarea
              typ="text"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Content"
              rows="5"
            />
          </div>
          <div class="col-md-12 text-center">
            <button type="submit" class="btn btn-primary px-5 mt-2" onClick={notify}>Post</button>
            <Link type="button" class="btn btn-warning mt-2 mx-3" to="/">Cancel</Link>
          </div>
        </form>
      <ToastContainer />
    </div>
  );
}

export default CreatePost;
