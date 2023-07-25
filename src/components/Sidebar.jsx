import { NavLink } from "react-router-dom";
import dashboardIcon from "../assets/icons/dashboard.svg";
import formsIcon from "../assets/icons/forms.svg";
import agentsIcon from "../assets/icons/agents.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="brand--name">
        <h1>Gyanada Institute</h1>
        <p>Admin Panel</p>
      </div>

      <ul className="nav--list">
        <li className="nav--item">
          <NavLink to="/">
            <img src={dashboardIcon} alt="dashboard icon" />
            <p>Dashboard</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/my-forms">
            <img src={formsIcon} alt="forms icon" />
            <p>My Forms</p>
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink to="/my-agents">
            <img src={agentsIcon} alt="agents icon" />
            <p>Agents</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
