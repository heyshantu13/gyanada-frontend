import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleProfileBtn = () => {
    setIsActive((prev) => !prev);
  };

  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate("/login")
  }

  return (
    <header className="header">
      <h4>Admin</h4>
      {/*  */}
      <div className="profile--btn--container">
        <button onClick={handleProfileBtn} className="profile--btn">
          <FaUser />
          <div className="profile-btn--text">
            <h6>Anshul kulkarni</h6>
            <p>Welcome</p>
          </div>
        </button>
        {isActive && (
          <div onClick={handleProfileBtn} className="expanded">
            <Link className="expanded--actions" to="/profile">Profile</Link>
            <button onClick={handleLogOut} className="expanded--actions">Log out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
