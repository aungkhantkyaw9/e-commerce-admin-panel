import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, Breadcrumbs, Typography } from "@mui/material";

// routes config
import routes from "../routes";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = async (e) => {
    e.preventDefault();
    const val = [true, "responsive"].includes(sidebarShow) ? false : true;
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <nav
      className="navbar navbar-expand navbar-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <a
              href="#"
              className="btn btn-sm nav-menu-button"
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars fa-2l"></i>
            </a>
          </div>
          <div className="col-lg-5">
            <Breadcrumbs aria-label="breadcrumb">
              <Typography sx={{ color: "#4E57AA" }}>Dashboard</Typography>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheHeader;
