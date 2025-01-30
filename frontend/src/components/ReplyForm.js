import axios from "axios";
import { useState } from "react";

const ReplyForm = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    console.log("🔹 Token Sent:", token); // Debugging

    if (!token) {
      alert("⚠️ No token found. Please login again.");
      return;
    }

    try {
      // Send a POST request to create a reply
      const response = await axios.post(
        "http://localhost:5000/api/replies/create",
        { postId, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("✅ Reply Created:", response.data);
      setContent(""); // Clear content after successful submission
    } catch (error) {
      console.error("❌ Reply Submission Error:", error.response?.data || error.message);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Reply</button>
    </form>
  );
};

export default ReplyForm;
