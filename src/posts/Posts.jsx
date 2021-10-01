import React, { useState, useEffect } from "react";

import Post from "./Post";
import {
  Link
} from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_Post)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="App">
      <h1 class="m-5 text-center animate__animated animate__backInDown animate__delay-2s">Recently published</h1>
      <Link class="btn btn-warning" to="/create">Post your ideas</Link>
      {posts.map(post => (
        <Post title={post.title} body={post.body} id={post.id} user={post.user_id} time={post.created_at} length="100"/>
      ))}
    </div>
  );
}

export default Posts;
