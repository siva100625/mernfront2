import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <div style={styles.formWrapper}>
        <PostForm setPosts={setPosts} />
      </div>
      <div style={styles.postListWrapper}>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#eef2f3",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "2.8rem",
    fontWeight: "600",
    marginBottom: "20px",
  },
  formWrapper: {
    width: "100%",
    maxWidth: "600px",
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
  postListWrapper: {
    width: "100%",
    maxWidth: "600px",
    marginTop: "20px",
  },
};

export default Dashboard;
