/**
 * Login Form
 * @author Aung Khant Kyaw
 * @create 4/14/2022
 */

import React, { useState, useEffect } from "react";
import { isEmpty, checkMaxLength } from "../../common/validation/Validation";

function LoginIndex({ t }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState([]);

  let customer_name = window.location.href.split("/")[3];

  useEffect(() => {
    //
  }, []);

  const handleLogin = () => {
    const isValidate = validateForm();
    
    if(isValidate) {
      window.location.href = "/dashboard";
    }
  };

  const validateForm = () => {
    let isValidate = true;

    if (isEmpty(username)) {
      setNameError("Username is required.");
      isValidate = false;
    } else if (!checkMaxLength(username, 20)) {
      setNameError("Username too long.");
      isValidate = false;
    } else {
      setNameError("");
      isValidate = true;
    }

    if (isEmpty(password)) {
      setPasswordError("Password is required.");
      isValidate = false;
    } else {
      setPasswordError("");
      isValidate = true;
    }

    return isValidate;
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid login-form">
        <div className="card login-card">
          <form id="login-form" className="login-style">
            <div className="row">
              <div className="col form-control-container">
                <img src="/logo.png" alt="Login-logo" className="login-img" />
              </div>
            </div>
            <div className="row">
              <div className="col form-control-container">
                <p className="text-center ptitle">ADMIN PANEL LOGIN</p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-12 form-control-container">
                <input
                  type="text"
                  autoComplete="new-password"
                  className="form-control form-input-control"
                  placeholder="Username"
                  name="uname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {nameError !== "" && (
                <div className="col-md-12 form-control-container">
                  <span className="text-danger">{nameError}</span>
                </div>
              )}
            </div>
            <div className="row mb-4">
              <div className="col form-control-container">
                <input
                  type="password"
                  autoComplete="new-password"
                  className="form-control form-input-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordError !== "" && (
                <div className="col-md-12 form-control-container">
                  <span className="text-danger">{passwordError}</span>
                </div>
              )}
            </div>
            <div className="row mb-5">
              <div className="col form-control-container">
                <button
                  type="button"
                  id="email_login"
                  className="mx-auto d-block btn-blue login-button "
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginIndex;
