import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Forum System</h1>
      <div style={styles.buttonContainer}>
        <Link to="/register">
          <button style={styles.button}>Register</button>
        </Link>
        <Link to="/login">
          <button style={styles.button}>Login</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full height of the screen
    backgroundColor: "#f4f4f9", // Light background color
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    cursor: "pointer",
    backgroundColor: "#4CAF50", // Green background color
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Home;
