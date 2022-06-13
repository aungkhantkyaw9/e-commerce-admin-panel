import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = async (e) => {
    e.preventDefault();
    const val = [true, "responsive"].includes(sidebarShow) ? false : true;
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <nav className="navbar navbar-expand" aria-label="Header Navbar">
      <div className="container-fluid mx-3" style={{ minHeight: "56px" }}>
        <div className="row top-nav-bar" style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <button
              className="btn btn-sm nav-menu-button"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars fa-2l"></i>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              flex: "1",
              padding: "0",
              alignItems: "center",
            }}
          >
            <img src="/logo.png" alt="Login-logo" className="header-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheHeader;
