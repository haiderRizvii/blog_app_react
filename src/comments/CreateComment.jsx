import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateComment = (props) => {
  const [comment, setComment] = useState('');
  const url = "http://localhost:3003/api/v1/comments?post_id=";
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const body = comment;
    const singleComment = {body};
    fetch(url + props.id,{
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(singleComment)
    }).then(() => {
      props.parentCallback()
      history.push('/posts/' + props.id);
    })
  }

  return (
    <div class="container m-5">
      <h4 class="text-center">Add Comment</h4>
      <hr/>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" class="btn btn-primary px-5 ">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
