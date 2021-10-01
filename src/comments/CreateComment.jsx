import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const CreateComment = (props) => {
  const [comment, setComment] = useState('');
  const url = `http://localhost:3003/api/v1/posts/${props.id}/comments`;
  const history = useHistory();
  const { user } = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const body = comment;
    const user_id = user.id.toString()
    const singleComment = {body, user_id};
    fetch(url,{
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(singleComment)
    }).then(() => {
      props.parentCallback()
      history.push('/posts/' + props.id);
      setComment('')
    })
  }

  const checkAuth = (e) => {
    if(localStorage.isAuthenticated){
      handleSubmit(e)
    }
    else {
      alert("Pleas Login to Post a Comment!!")
      history.push('/login');
    }
  }

  return (
    <div class="container m-5">
      <h4 class="text-center">Add Comment</h4>
      <hr/>
      <form onSubmit={checkAuth}>
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Comment...!"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary px-5">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
