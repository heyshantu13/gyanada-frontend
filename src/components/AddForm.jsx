import { FormBuilder } from "@formio/react";
import { useState } from "react";
import { formIoData } from "../assets/FormIoData";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { saveForm } from "../redux/formSlice";
import { Link } from "react-router-dom";

const AddForm = () => {
  const [formData, setFormData] = useState(
    formIoData
  );
  // console.log(formData.components);



  const handleSave = () => {
    console.log(formData)
    // console.log(formData.components);
    //dispatch(saveForm(formDataInStore));
  };

  return (
    <div className="base--container">
  
  <header className="wrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
           Form Manager
          </li>
          <li className="breadcrumb-item active" aria-current="page">
           Edit Form
          </li>
        </ol>
      </nav>
      <button onClick={handleSave} className="btn btn-primary">
        {
          "Save Form"
        }
      </button>
    </header>
    {/* start page */}
    <div className="row">
          <div className="col bg-light p-4 rounded mt-4">
      <FormBuilder
        form={formData}
        onChange={(schema) => setFormData(schema)}
        options={{
          builder: {
            basic: {
              components: {
                toggleCustomComp: true,
              },
            },
            advanced: false,
          },
          premium: true, // Enable premium mode
        }}
      />
      </div>
      </div>
      {/* End Page */}
    </div>
  );
};

export default AddForm;
