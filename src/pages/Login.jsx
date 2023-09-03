import { useState } from "react";
import { notifySuccess, notifyError } from "../components/ToastMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";
import { validateField } from "../utils/validationUtils";
import { publicRequest } from "../http/axiosInterceptors";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const errors = {};

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstErrorField, setFirstErrorField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password fields
    const errors = {};
    for (const field in userDetails) {
      errors[field] = validateField(field, userDetails[field]);
    }

    // Find the first error field encountered
    const firstError = Object.keys(errors).find((field) => errors[field]);
    if (firstError) {
      setFirstErrorField(firstError);
      notifyError(errors[firstError]);
      return;
    }

    try {
      const { email, password } = userDetails;
      const { data } = await publicRequest.post(
        "/login",
        { email, password }
      );
      localStorage.setItem("token", data.data.token);
      dispatch(setToken(data.data.token));
      if (data.data.role === "admin") {
        notifySuccess(`${data.message}`);
        setTimeout(() => navigate("/admin/dashboard"), 1200);
      }
    } catch (error) {
      console.log(error);
      notifyError("You have entered an invalid email or password");
      console.warn(error);
    }
  };

  return (
    <>
      <div className="login--container d-flex justify-content-center align-items-center">
        <div className="login--wrapper">
          <div className="login--header text-center">
            <h2 className="mb-2">Gyanada Insitution System</h2>
            <p className="text-muted">V1.0.0 </p>
          </div>
          <form className="login--form">
            <div className="login--input">
              <label>Email</label>
              <input
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                type="email"
                placeholder="someone@gyanada.com"
              />
            </div>
            {/* Display error message for email */}
            {/* {errors.email && <p className="error">{errors.email}</p>} */}
            {/* Assuming 'errors.email' will be handled in your validation logic */}

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
            {/* Display error message for password */}
            {/* {errors.password && <p className="error">{errors.password}</p>} */}

            <div className="other--links">
              <a href="#">Forgotten Password?</a>
            </div>
            <button onClick={(e) => handleSubmit(e)} className="login--btn">
              Login In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
