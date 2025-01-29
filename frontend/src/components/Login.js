import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/users/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9", // Light background color
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px", // Set width for form
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "10px",
    fontSize: "1.2rem",
    cursor: "pointer",
    backgroundColor: "#4CAF50", // Green background color
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
