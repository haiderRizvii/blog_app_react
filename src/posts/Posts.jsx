import React, { useState, useEffect } from "react";
import Post from "./Post";
import {
  Link
} from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  //const url = "https://jsonplaceholder.typicode.com/posts";
  const url = "http://localhost:3003/api/v1/posts";

  useEffect(() => {
    fetch(url)
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
      <h1 class="m-2">POSTS</h1>
      <Link class="btn btn-warning" to="/create">Post your ideas</Link>
      {posts.map(post => (
        <Post title={post.title} body={post.body} id={post.id} user={post.user_id} time={post.created_at} length="100"/>
      ))}
    </div>
  );
}

export default Posts;
