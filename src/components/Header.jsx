import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import { userRequest } from "../http/axiosInterceptors";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [userData, setUserData] = useState(null); // Initialize userData as null

  const handleProfileBtn = () => {
    setIsActive((prev) => !prev);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    dispatch(logOut());
    setIsLoggedOut(true);
  };

  // Perform redirect with replace behavior on logout
  useEffect(() => {
    if (isLoggedOut) {
      // Redirect to the home page ("/") with replace behavior
      navigate("/", { replace: true });
    }
  }, [isLoggedOut, navigate]);

  const token = useSelector((state) => state.user.token);

  // Fetch user data from the API and update the state
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userRequest.get("/my-profile");
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

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
            <button onClick={handleLogout} className="expanded--actions">
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
