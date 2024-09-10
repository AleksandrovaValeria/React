import { NavLink } from "react-router-dom";
import BtnTheme from "../../components/btnTheme/BtnTheme"

import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <BtnTheme />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
