/* eslint-disable no-unused-vars */
// noinspection ES6CheckImport
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./loginstyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://45.156.184.36:3000/auth/", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="text-danger">{error && error}</div>
          <h1>ورود</h1>
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
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
