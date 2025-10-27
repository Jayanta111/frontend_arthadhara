import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure Toasts show properly

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://backend-pi-gilt-mhy8gp759b.vercel.app/api/login",
        { email, password },
        { withCredentials: true }
      );

      console.log("Login response:", data);

      const { success, message, token } = data;

      if (success) {
        handleSuccess(message);

        // ✅ Save JWT token to localStorage for dashboard access
        localStorage.setItem("token", token);

        // ✅ Redirect to Dashboard after 1 second
        setTimeout(() => {
          window.location.href = "https://dashboard-arthadhara.vercel.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("Login error:", error);
      handleError("Something went wrong! Please try again.");
    }

    // Clear input fields
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="container form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        <span>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
