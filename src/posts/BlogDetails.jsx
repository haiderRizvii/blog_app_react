
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

import {
  Link
} from "react-router-dom";
import Post from "./Post";
import './posts.css'
import ShowComments from "../comments/ShowComments";

const BlogDetails = ({match}) => {
  const history = useHistory();
  const { id } = useParams();
  const url = `http://localhost:3003/api/v1/posts/${id}`;
  const { data: blog, error, isPending } = useFetch(url);

  const deleteHandle = () => {
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      alert("Post with id: " + id + " delete successully!!")
      history.push('/');
    })
  }


  return (
    <div className="blog-details" class="container">

      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <Post title={blog["data"].title} body={blog["data"].body} id={blog["data"].id} user={blog["data"].user_id} time={blog["data"].created_at}/>
      )}
      <div class="container my-3">
        <Link type="button" class="btn btn-warning mt-2 mx-3" to="/">Back to Home</Link>
        <button type="button" class="btn btn-danger mt-2 mx-3" onClick={deleteHandle}>Delete</button>
      </div>

      <ShowComments id={id}/>
    </div>
  );
}

export default BlogDetails;
