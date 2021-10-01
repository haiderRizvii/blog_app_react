import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const ShowComments = (props) => {
  const [comments, setComments] = useState([]);
  const [call, setCall] = useState(false);
  const url = `http://localhost:3003/api/v1/posts/${props.id}/comments`;

  const handleCall = () =>{
    setCall(!call)
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setComments(data));
  }, [call , url]);
  return (
    <div>
      <CreateComment comments={comments.data} id={props.id} parentCallback = {handleCall} />
      <hr />
      <table className="table table-striped">
        <tbody>
          {comments?.data?.reverse()?.map((comment) => (
            <Comment comment={comment} replies={comments.data.filter((c) => c.comment_id === comment.id)}/>
          ))}
        </tbody>
      </table>
      <hr/>
    </div>
  );
};

export default ShowComments;
