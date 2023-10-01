import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userRequest } from "../http/axiosInterceptors";

const Profile = () => {
  const [userData, setUserData] = useState(null); // Initialize userData as null

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

  // console.log(userData);

  return (
    <div className="base--container">
      <div>
        <h4>Profile</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin/profile">Dashboard/ Profile</Link>
            </li>
          </ol>
        </nav>
      </div>
      <section className="profile--container">
        <header className="profile-section--header">
          <div className="user--data">
            <div className="profile-icon">
              <p>GA</p>
            </div>
            <div className="profile--details">
              <h6>{userData?.fullname}</h6>
              <p>Active</p>
            </div>
          </div>
        </header>
        <div className="other--details">
          <div className="details">
            <h6>Name</h6>
            <p>{userData?.fullname}</p>
          </div>
          <div className="details">
            <h6>Email</h6>
            <p>{userData?.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
