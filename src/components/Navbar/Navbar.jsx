import React from "react";
import "./Navbar.scss";
import { GrLogout } from "react-icons/gr";

const Navbar = ({ setUserRole }) => {
  return (
    <nav>
      <div className='navbar-header'></div>

      <button className='navbar-logout' onClick={() => setUserRole(null)}>
        <GrLogout></GrLogout>
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
