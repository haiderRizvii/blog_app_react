import {
  Link
} from "react-router-dom";

const Post = (props) => {
  const MAX_LENGHT = props.length;

  return (
    <div class="container card my-3">
      <div class="card-header">
        <h1 class="text-center">{props.title}</h1>
      </div>
      <div class="card-body">
        <h5 class="card-title text-center">By user: {props.id}, At: {props.time} </h5>
        <p class="card-text">{props.body.substring(0, MAX_LENGHT)}</p>
        {MAX_LENGHT && <Link to={`/posts/${props.id}`} class="btn btn-primary">Keep reading...</Link>}
      </div>
    </div>
  );
}

export default Post;
