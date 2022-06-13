/**
 * Dashboard Form
 * @author Aung Khant Kyaw
 * @create 14/4/2022
 */

import React, { useState, useEffect } from "react";
import Loading from "../common-component/loading/Loading";

function DashboardIndex() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Loading show={loading} />
      <div className="card px-5 py-4 mx-3">
        <div className="row">
          <div className="col">
            <h4 className="mb-3" style={{ color: "#4E57AA" }}>
              Welcome John!
            </h4>
          </div>
        </div>
        <div className="row md-12 xs-12">
          <div className="p-2 col-12 col-sm-4 col-md-4 cards">
            <div className="total common-div d-block mb-2 card info-card bg-sale">
              <div className="d-inline-block img-block icon-sale">
                <i className="fas fa-dollar-sign fa-dashboard-icon"></i>
              </div>
              <div className="d-inline-block font-lg text-block">
                <div className="mb-1 title-text">Total Sales</div>
                <span className="mb-0 amt-text">$1,342,562</span>
              </div>
            </div>
            <div className="total common-div d-block mb-2 card info-card bg-order">
              <div className="d-inline-block img-block icon-order">
                <i className="fas fa-shopping-bag fa-dashboard-icon"></i>
              </div>
              <div className="d-inline-block font-lg text-block">
                <div className="mb-1 title-text">Total Orders</div>
                <span className="mb-0 amt-text">4250</span>
              </div>
            </div>
            <div className="total common-div d-block mb-2 card info-card bg-product">
              <div className="d-inline-block img-block icon-product">
                <i className="fas fa-box fa-dashboard-icon"></i>
              </div>
              <div className="d-inline-block font-lg text-block">
                <div className="mb-1 title-text">Total Products</div>
                <span className="mb-0 amt-text">571</span>
              </div>
            </div>
            <div className="total common-div d-block mb-2 card info-card bg-visitor">
              <div className="d-inline-block img-block icon-visitor">
                <i className="fas fa-user fa-dashboard-icon"></i>
              </div>
              <div className="d-inline-block font-lg text-block">
                <div className="mb-1 title-text">Total Visitors</div>
                <span className="mb-0 amt-text">23781</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardIndex;
