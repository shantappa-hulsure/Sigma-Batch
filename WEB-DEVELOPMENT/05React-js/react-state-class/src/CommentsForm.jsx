import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    addNewComment(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 5
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Give a comment</h4><br /><br />
        <input name="username" type="text" placeholder="username" value={formData.username} onChange={handleInputChange} />
        <br /><br /><br />
        <textarea name="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
        <br /><br /><br />
        <input name="rating" type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
        <br /><br /><br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
