import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {

  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setPosts(data));
  });

  return (
    <div className="App">
      <h1 class="m-5">Posts</h1>
      {posts.map(post => (
        <Post title={post.title} body={post.body} id={post.id}/>
      ))}
    </div>
  );
}

export default Posts;
