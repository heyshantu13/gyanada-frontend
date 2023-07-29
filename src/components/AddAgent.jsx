import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { userMultipartRequest } from "../http/axiosInterceptors";

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAgentDetails({ ...agentDetails, photo: file });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      for (const key in agentDetails) {
        formData.append(key, agentDetails[key]);
      }
      const response = await userMultipartRequest.post("/user/agent/create", formData);
      console.log(response);
     
    } catch (error) {
      console.error(error);
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
      <form>
        <div className="input">
          <label>Name <span className="text-danger">*</span></label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, fullname: e.target.value })
            }
            type="text"
            placeholder="Fullname"
          />
        </div>
        <div className="input">
          <label>Email <span className="text-danger">*</span></label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, email: e.target.value })
            }
            type="email"
            placeholder="someone@email.com"
          />
        </div>
        <div className="input">
          <label>Password <span className="text-danger">*</span></label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, password: e.target.value })
            }
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="input">
          <label>Phone <span className="text-danger">*</span></label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, mobile: e.target.value })
            }
            type="number"
            placeholder="7777788888"
          />
        </div>
        <div className="input">
          <label>Photo <span className="text-danger">*</span></label>
          <input
            onChange={handleFileChange}
            type="file"
            accept=".jpg, .jpeg, .png" // Add accepted file formats if needed
            name="photo"
          />
        </div>
        <div className="input">
          <label>Date of Birth <span className="text-danger">*</span></label>
          <input
            onChange={(e) =>
              setAgentDetails({ ...agentDetails, dateOfBirth: e.target.value })
            }
            type="text"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="input">
          <label>Address <span className="text-danger">*</span></label>
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
