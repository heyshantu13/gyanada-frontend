import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
import { userMultipartRequest } from "../http/axiosInterceptors";
import { notifyError, notifySuccess } from "./ToastMessage";

const AddAgent = ({ setIsModalActive }) => {
  const [agentDetails, setAgentDetails] = useState({
    fullname: "",
    email: "",
    password: "",
    mobile: "",
    dateOfBirth: "",
    address: "",
    photo: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAgentDetails({ ...agentDetails, photo: file });
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if any field is empty
    for (const key in agentDetails) {
      if (!agentDetails[key]) {
        newErrors[key] = "This field is required";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      notifyError("Every Field is required!")
      return; // Don't submit if there are validation errors
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      for (const key in agentDetails) {
        formData.append(key, agentDetails[key]);
      }
      const response = await userMultipartRequest.post(
        "/user/agent/create",
        formData
      );
      // console.log(response);
      notifySuccess("Agent created!");
      setIsModalActive(false)
    } catch (error) {
      console.error(error);
      notifyError("Something went wrong, please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalActive(false);
  };


  return (
    <div className="add-agent-modal">
      <form className="add-agent-form">
        <div className="input">
          <label>Name</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, fullname: e.target.value })
            }
            type="text"
            placeholder="Fullname"
          />
        </div>
        <div className="input">
          <label>Email</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, email: e.target.value })
            }
            type="email"
            placeholder="someone@email.com"
          />
        </div>
        <div className="input">
          <label>Password</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, password: e.target.value })
            }
            type="password"
            placeholder="Password"
          />

        </div>
        <div className="input">
          <label>Phone</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, mobile: e.target.value })
            }
            type="number"
            placeholder="7777788888"
          />
        </div>
        <div className="input">
          <label>Photo</label>
          <input
            onChange={handleFileChange}
            type="file"
            accept=".jpg, .jpeg, .png"
            name="photo"
          />
        </div>
        <div className="input">
          <label>Date of Birth</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, dateOfBirth: e.target.value })
            }
            type="text"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="input">
          <label>Address</label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, address: e.target.value })
            }
            type="text"
            placeholder="Civil Line, Gondia"
          />
        </div>
        <div className="form--actions">
          <button onClick={(e) => handleCancel(e)} className="btn btn-danger">
            Cancel
          </button>
          <button onClick={(e) => handleSave(e)} className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAgent;
