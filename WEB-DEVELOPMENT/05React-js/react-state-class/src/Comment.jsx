import { useState } from "react";
import {useFormik} from "formik"
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([{ username: "ssh", remarks: "good Job", rating: 4 }]);

  function addNewComment(comment) {
    setComments((currComments) => [...currComments, comment]);
    console.log("added new comment", comment);
  }

  return (
    <>
      <h3>All Comments</h3>
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <span>{comment.remarks}</span>&nbsp;&nbsp;&nbsp;
          <span>{comment.rating}</span>&nbsp;&nbsp;&nbsp;
          <p>-@{comment.username}</p>
        </div>
      ))}
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
