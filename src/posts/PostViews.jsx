import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostMap from "./PostsMap";

const PostViews = () => {

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

  console.log(posts)

  return (
    <div class="container">
    <Link class="btn btn-warning m-5" to="/create"><i class="bi bi-file-earmark-plus-fill mr-1"></i>Post your ideas</Link>
    <table class="table table-hover table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <PostMap title={post.title} id={post.id} user={post.user_id} published={post.published}/>
        ))}
      </tbody>
      </table>
    </div>



   );
}

export default PostViews;
