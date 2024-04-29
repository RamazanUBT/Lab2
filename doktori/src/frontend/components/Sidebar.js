import React, { Component } from "react";
import "./SidebarCss.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img src="images/Frame 1.png" alt="Logo" />
          <CustomLink to="/patientslist">
            <li className="button">
              <img src="images/Pacienti.png" alt="Pacienti" />
              Pacientet
            </li>
          </CustomLink>
          <CustomLink to="/profiles">
            <li className="button">
              <img src="images/Profili.png" alt="Profili" />
              Profile
            </li>
          </CustomLink>
        </div>
      </div>
    );
  }
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Sidebar;
