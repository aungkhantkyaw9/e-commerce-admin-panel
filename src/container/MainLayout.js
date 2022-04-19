import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TheHeader from "./TheHeader";
import TheContent from "./TheContent";
import SidebarMenu from "./SidebarMenu";

const MainLayout = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  const toggleSidebar = async () => {
    dispatch({ type: "set", sidebarShow: false });
  };

  return (
    <div className={show ? "app default-layout toggle" : "app default-layout"}>
      <SidebarMenu />
      <div className="page-wrapper">
        <TheHeader />
        <div className="page-body">
          <TheContent />
        </div>
      </div>
      {show && <div className="sidebar-backdrop" onClick={toggleSidebar} />}
    </div>
  );
};

export default MainLayout;
