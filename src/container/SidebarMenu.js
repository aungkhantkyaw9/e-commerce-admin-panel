import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarData } from "./Dummy";

const SidebarMenu = () => {
  const show = useSelector((state) => state.sidebarShow);

  const formName = window.location.href.split("/")[3];

  const handleTouchStart = () => {
    document.getElementById("navMenuItems").style.overflowY = "overlay";
    document.getElementById("navMenuItems").classList.remove("menu-scroll");
  };

  const handleTouchEnd = () => {
    document.getElementById("navMenuItems").style.overflow = "hidden";
    document.getElementById("navMenuItems").classList.add("menu-scroll");
  };

  const handleLogout = () => {
    
  }

  return (
    <>
      <nav className={show ? "nav-menu active" : "nav-menu"}>
        <div className="avatar">
          <img
            src="/profile_default.png"
            className="default-avatar mt-3 mb-2"
            alt="profile-avatar"
          />
          <label className="login-username mb-3">John Denver</label>
        </div>
        <ul
          id="navMenuItems"
          className="nav-menu-items menu-scroll"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link
                  to={item.path}
                  className={
                    formName === item.path.slice(1) ? "menu-link active" : ""
                  }
                >
                  <i className={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <img src="/wave.png" alt="wave-bg" />
      </nav>
    </>
  );
};

export default SidebarMenu;
