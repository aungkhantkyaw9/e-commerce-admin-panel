/**
 * Dashboard Form
 * @author Aung Khant Kyaw
 * @create 14/4/2022
 */

import React, { useState, useEffect } from "react";
import { isEmpty, checkMaxLength } from "../../common/validation/Validation";

function DashboardIndex({ t }) {
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
    validateForm();
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
    <div className="card px-5 py-4">
      <div className="row">
        <div className="col">
          <h4 className="mb-3" style={{ color: "#4E57AA" }}>
            Welcome John!
          </h4>
        </div>
      </div>
      <div className="row md-12 xs-12">
        <div className="p-2 col-12 col-sm-4 col-md-4">
          <div className="total common-div d-block mb-2 card info-card bg-sale">
            <div className="d-inline-block img-block icon-sale">
              <i className="fas fa-dollar-sign fa-2x"></i>
            </div>
            <div className="d-inline-block font-lg text-block">
              <div className="mb-1 title-text">Total Sales</div>
              <span className="mb-0 amt-text">$1,342,562</span>
            </div>
          </div>
        </div>
        <div className="p-2 col-12 col-sm-4 col-md-4">
          <div className="total common-div d-block mb-2 card info-card bg-order">
            <div className="d-inline-block img-block icon-order">
              <i className="fas fa-shopping-bag fa-2x"></i>
            </div>
            <div className="d-inline-block font-lg text-block">
              <div className="mb-1 title-text">Total Orders</div>
              <span className="mb-0 amt-text">4250</span>
            </div>
          </div>
        </div>
        <div className="p-2 col-12 col-sm-4 col-md-4">
          <div className="total common-div d-block mb-2 card info-card bg-product">
            <div className="d-inline-block img-block icon-product">
              <i className="fas fa-box fa-2x"></i>
            </div>
            <div className="d-inline-block font-lg text-block">
              <div className="mb-1 title-text">Total Products</div>
              <span className="mb-0 amt-text">571</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row md-12 xs-12">
        <div className="p-2 col-12 col-sm-4 col-md-4">
          <div className="total common-div d-block mb-2 card info-card bg-visitor">
            <div className="d-inline-block img-block icon-visitor">
              <i className="fas fa-user fa-2x"></i>
            </div>
            <div className="d-inline-block font-lg text-block">
              <div className="mb-1 title-text">Total Visitors</div>
              <span className="mb-0 amt-text">23781</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardIndex;
