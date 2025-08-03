import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import "./Navpar.css";
export const Navpar = () => {
  return (
    <div className="nav grid">
      <div className="nav_list">
        <ul>
          <li>
            <NavLink to={"/"}>
              <div className="nav_link">
                <FaHome />
              </div>
              <h3>Home</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/about"}>
             <div className="nav_link">
               <FaUserAlt/>
             </div>
              <h3>About</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/projects"}>
              <div className="nav_link">
                <FaFolderOpen />
              </div>
              <h3>Projects</h3>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"}>
            <div className="nav_link">
                <MdOutlineContactPhone/>
            </div>
              <h3>Contact</h3>
            </NavLink>
          </li>
        </ul>
        <RiCloseLine className="nav_close" />
      </div>
      <div className="nav_togle">
        <RiMenuLine />
      </div>
    </div>
  );
};
