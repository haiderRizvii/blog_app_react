import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostMap = (props) => {
  const [call, setCall] = useState(props.published);
  console.log(call)
  const publish = () => {
    fetch(`http://localhost:3003/api/v1/posts/${props.id}/publish`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then();
    setCall(!call)
    console.log(call);

  };

  const unpublish = () => {
    fetch(`http://localhost:3003/api/v1/posts/${props.id}/unpublish`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then();
    setCall(!call)
    console.log(call);
  };

  useEffect(() => {
    setCall(false);
  }, [call]);

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>
        {props.published ? (
          <td class="text-success">
            <i class="bi bi-check-lg"></i>
          </td>
        ) : (
          <td class="text-danger">
            <i class="bi bi-x-lg"></i>
          </td>
        )}
      </td>
      <td>
        <Link class="btn btn-sm btn-info mx-1">Show</Link> |
        <Link class="btn btn-sm btn-secondary mx-1">Edit</Link> |
        <Link class="btn btn-sm btn-danger mx-1">Delete</Link> |
        {props.published ? (
          <input
            value="Publish"
            type="button"
            class="btn btn-sm btn-success mx-1"
            onClick={publish}
          />
        ) : (
          <input
            value="Unpublish"
            type="button"
            class="btn btn-sm btn-danger mx-1"
            onClick={unpublish}
          />
        )}
      </td>
    </tr>
  );
};

export default PostMap;
