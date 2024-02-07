import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vote from "../../assets/vote.png";
import './navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRightFromBracket, faCircleInfo, faBars, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { toast } from 'react-toastify';
// import "";

const Navbar = () => {
  const navigate = useNavigate();

  function handleLogout(){
    localStorage.removeItem('loginKey')
    localStorage.removeItem('loginDetail')
    navigate('/')
  }

  return (
    <>
      <nav className="nav_bg">
        <div className="nav">
          <Link to="/Home">
            <img src={vote} className="vote_img" alt=" Logo" />
          </Link>

          <div className="nav_list">
            <ul className="nav_list_ul">
              <li className="nav_list_li">
                <Link to="/Home">Home</Link>
              </li>
              <li className="nav_list_li">
                <Link to="/Users">Users</Link>
              </li>
              <li className="nav_list_li">
              <Link to="/election">Election</Link>
              </li>
              <li className="nav_list_li">
              <Link to="/parties">Party</Link>
              </li>
              <li className="nav_list_li">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
              <button className="nav_btn" onClick={handleLogout}>Logout </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;