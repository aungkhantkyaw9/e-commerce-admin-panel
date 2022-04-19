import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarData } from "./Dummy";

const SidebarMenu = () => {
  const show = useSelector((state) => state.sidebarShow);

  return (
    <>
      <nav className={show ? "nav-menu active" : "nav-menu"}>
        <div className="avatar">
          <img src="/profile_default.png" className="default-avatar mt-3 mb-2"/>
          <label className="login-username mb-3">John Austin</label>
        </div>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <i className={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <img src="/wave.png" />
      </nav>
    </>
  );
};

export default SidebarMenu;
