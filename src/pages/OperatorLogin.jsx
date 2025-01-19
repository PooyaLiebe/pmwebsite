/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport

import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./loginstyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function OperatorLogin({ setRole }) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/operator/operatorlogin", values)
      .then((result) => {
        setLoading(false);
        if (result.data.loginStatus) {
          setRole(result.data.role); // Set the role in the state
          console.log("Logged in role:", result.data.role); // Log the role
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="text-warning">{error && error}</div>
          <h1>ورود اپراتور</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="نام کاربری"
              autoComplete="off"
              required
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="کلمه عبور"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "ورود"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OperatorLogin;
