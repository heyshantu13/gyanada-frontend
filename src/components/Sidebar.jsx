import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../redux/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      dispatch(logOut());
    }
  };

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
          <NavLink to="/admin/students" activeClassName="active">
            <i className="fas fa-user-graduate icon"></i>
            <p>Students Manager</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/agents" activeClassName="active">
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
          <NavLink to="/admin/events" activeClassName="active">
            <i className="fas fa-bell icon"></i>
            <p>Notifications & Events</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/admin/profile" activeClassName="active">
            <i className="fas fa-user icon"></i>
            <p>My Profile</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink onClick={handleLogout} to="/" activeClassName="active">
            <i className="fas fa-sign-out-alt icon"></i>
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
