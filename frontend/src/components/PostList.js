import React from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

const PostList = ({ posts }) => {
  return (
    <div style={styles.postContainer}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} style={styles.postCard}>
            <h3 style={styles.title}>{post.title}</h3>
            <p style={styles.content}>{post.content}</p>
            <ReplyForm postId={post._id} />
            <ReplyList postId={post._id} />
          </div>
        ))
      ) : (
        <p style={styles.noPosts}>No posts available</p>
      )}
    </div>
  );
};

const styles = {
  postContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  postCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },
  postCardHover: {
    transform: "scale(1.02)",
  },
  title: {
    color: "#2c3e50",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  content: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "15px",
  },
  noPosts: {
    fontSize: "1.2rem",
    color: "#777",
    textAlign: "center",
  },
};

export default PostList;
