import { useState } from "react";

const Comment = (props) => {
  const [like, setLike] = useState(false)

  return (
    <tr>
      <td className="w-5">{props.comment.id}</td>
      <td className="w-20">{props.comment.created_at}</td>
      <td className="w-10">{props.comment.user_id}</td>
      <td className="w-45">{props.comment.body}</td>
      <td className="w-5">{props.comment.comment_id}</td>
      <td onClick={() => setLike(!like)} className="w-15">{like? <i class="fas fa-heart text-danger mx-5"/>: <i class="far fa-heart text-danger mx-5"/>}</td>
      {/* {!props.replies.length?
      <div>
        <td className="w-5">{props.replies.id}</td>
        <td className="w-20">{props.replies.created_at}</td>
        <td className="w-10">{props.replies.user_id}</td>
        <td className="w-45">{props.replies.body}</td>
        <td onClick={() => setLike(!like)} className="w-15">{like? <i class="fas fa-heart text-danger mx-5"/>: <i class="far fa-heart text-danger mx-5"/>}</td>
      </div>
      : false
    } */}

    </tr>
  );
}

export default Comment;


