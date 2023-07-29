import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { userMultipartRequest, userRequest } from "../http/axiosInterceptors";

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

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log(agentDetails);
    try {
      const { fullname, email, password, mobile, dateOfBirth, address, photo } =
        agentDetails;
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("mobile", mobile);
      formData.append("dateOfBirth", dateOfBirth);
      formData.append("address", address);
      formData.append("photo", photo);

      console.log(formData);

      // Post
      const response = await userRequest.post(
        "/user/agent/create",
        userMultipartRequest
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalActive(false);
  };

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAgentDetails({ ...agentDetails, photo: file });
  };

  return (
    <div className="add-agent-modal">
      <form>
        <div className="input">
          <label>Fullname</label>
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
            accept=".jpg, .jpeg, .png" // Add accepted file formats if needed
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
          <button
            onClick={(e) => handleCancel(e)}
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>
          <button onClick={(e) => handleSave(e)} className="btn btn-success">
            Save
          </button>
        </div>
      </form>
      <button
        onClick={(e) => handleCancel(e)}
        className="btn btn-danger close-modal"
      >
        <IoCloseSharp />
      </button>
    </div>
  );
};

export default AddAgent;
