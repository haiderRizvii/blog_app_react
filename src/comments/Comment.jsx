import { useState } from "react";

const Comment = (props) => {
  const [like, setLike] = useState(false)
  return (
    <tr>
      <td className="w-25">{props.comment.created_at}</td>
      <td className="w-10">{props.comment.user_id}</td>
      <td className="w-50">{props.comment.body}</td>
      <td onClick={() => setLike(!like)} className="w-15">{like? <i class="fas fa-heart text-danger mx-5"/>: <i class="far fa-heart text-danger mx-5"/>}</td>
    </tr>
  );
}

export default Comment;


