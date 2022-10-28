import React, { useState } from "react";
import itemList from "./itemList";
import { FaBars, FaTh } from "react-icons/fa";
import NiceLogo from "../../assets/NiceLogo";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ children, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let menuItem = [];

  if (user.roles == "super") {
    menuItem = itemList.superUserList;
  } else if (user.roles == "admin") {
    menuItem = itemList.adminList;
  } else if (user.roles == "employee") {
    menuItem = itemList.userList;
  }

  return (
    <div className='dashboard'>
      <div style={{ width: isOpen ? "200px" : "50px" }} className='sidebar'>
        <div className='top_section'>
          <div style={{ display: isOpen ? "block" : "none" }} className='logo'>
            <NiceLogo></NiceLogo>
          </div>
          <div className='logo_title'>
            <p></p>
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {user.roles &&
          menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className='link'
              activeclassname='active'
            >
              <div className='icon'>{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className='link_text'
              >
                {item.name}
              </div>
            </NavLink>
          ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
