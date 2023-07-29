import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import axios from "axios";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleProfileBtn = () => {
    setIsActive((prev) => !prev);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const [userData, setUserData] = useState();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await axios.get(
          "http://localhost:8081/api/web/my-profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setUserData(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  console.log(userData)

  return (
    <header className="header">
      <h4>{""}</h4>
      {/*  */}
      <div className="profile--btn--container">
        <button onClick={handleProfileBtn} className="profile--btn">
          <FaUser />
          <div className="profile-btn--text">
            <h6>{userData?.fullname}</h6>
            <p>{userData?.role}</p>
          </div>
        </button>
        {isActive && (
          <div onClick={handleProfileBtn} className="expanded">
            <Link className="expanded--actions" to="profile">
              Profile
            </Link>
            <button onClick={handleLogOut} className="expanded--actions">
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
