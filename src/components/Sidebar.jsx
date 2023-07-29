import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand--name">
        <h1>Gyanada Institute</h1>
        <p>Admin Panel</p>
      </div>

      <ul className="nav--list">
        <li className="nav--item">
          <NavLink to="/admin/dashboard" activeClassName="active">
            <i className="fas fa-chart-bar icon"></i>
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/forms" activeClassName="active">
            <i className="fas fa-user-graduate icon"></i>
            <p>Students Manager</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/forms" activeClassName="active">
            <i className="fas fa-user-tie icon"></i>
            <p>Agents Manager</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/forms" activeClassName="active">
            <i className="fas fa-clipboard-list icon"></i>
            <p>Form Manager</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/agents" activeClassName="active">
            <i className="fas fa-bell icon"></i>
            <p>Notifications & Events</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/agents" activeClassName="active">
            <i className="fas fa-user icon"></i>
            <p>My Profile</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/agents" activeClassName="active">
            <i className="fas fa-sign-out-alt icon"></i>
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
