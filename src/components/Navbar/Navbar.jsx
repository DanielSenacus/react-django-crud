import React from "react";
import "./Navbar.scss";
import { GrLogout } from "react-icons/gr";

const Navbar = ({ logOut }) => {
  return (
    <nav>
      <div className='navbar-header'></div>

      <button className='navbar-logout' onClick={() => logOut()}>
        <GrLogout></GrLogout>
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
