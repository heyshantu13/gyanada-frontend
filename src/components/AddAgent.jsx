import { IoCloseSharp } from "react-icons/io5";

const AddAgent = ({ setIsModalActive }) => {
  const handleSave = (e) => {
    e.preventDefault();
    // code for save agents data
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsModalActive(false);
  };
  
  return (
    <div className="add-agent-modal">
      <form>
        <div className="input">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <label>Email</label>
          <input type="email" placeholder="someone@email.com" />
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <label>Phone</label>
          <input type="number" placeholder="7777788888" />
        </div>
        <div className="input">
          <label>Date of Birth</label>
          <input type="date" placeholder="dd-mm-yy" />
        </div>
        <div className="input">
          <label>Photo</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .webp"
            placeholder="dd-mm-yy"
          />
        </div>
        <div className="input">
          <label>Address</label>
          <input type="text" placeholder="Civil Line, Gondia" />
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
