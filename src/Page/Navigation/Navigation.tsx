import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="topnav bg-gradient-to-b from-cyan-700 to-cyan-500">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/to-do-list">To Do List</NavLink>
        <NavLink to="/manageUser">Manage User</NavLink>
      </div>
    </Fragment>
  );
};

export default Navigation;
