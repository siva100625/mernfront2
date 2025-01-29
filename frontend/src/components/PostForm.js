import axios from "axios";
import { useState } from "react";

const PostForm = ({ setPosts }) => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await axios.post("http://localhost:5000/api/posts/create", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPosts((prev) => [res.data, ...prev]);
    setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Content" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
