import axios from "axios";
import { useState } from "react";

const ReplyForm = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/replies/create", { postId, content }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Write a reply..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Reply</button>
    </form>
  );
};

export default ReplyForm;
