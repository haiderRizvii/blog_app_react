import {
  Link
} from "react-router-dom";

const Post = (props) => {
  return (
    <div class="container card my-3">
      <div class="card-header">
        <h1>{props.title}</h1>
      </div>
      <div class="card-body">
        <h5 class="card-title">By user: {props.id}</h5>
        <p class="card-text">{props.body}</p>
        <Link href="#" class="btn btn-primary">Keep reading...</Link>
      </div>
    </div>
  );
}

export default Post;
