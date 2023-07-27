import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../components/ToastMessage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userDetails.email && userDetails.password) {
      // Submit logic here
      notify("✅ Login Successful")
      setTimeout(() => navigate("/"), 3000) //? Only to test
    } else {
      notify("⚠️ Please enter the login details")
    }
  };

  return (
    <>
      <div className="login--container">
        <div className="login--wrapper">
          <div className="login--header">
            <h4>Welcome to Gyanada Admin</h4>
            <p>Please enter your details</p>
          </div>
          <form className="login--form">
            <div className="login--input">
              <label>Email</label>
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                type="email"
                placeholder="johndoe@email.com"
              />
            </div>

            <div className="login--input">
              <label>Password</label>
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="other--links">
              <a href="#">Forgotten Password?</a>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="login--btn">
              Login In
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
