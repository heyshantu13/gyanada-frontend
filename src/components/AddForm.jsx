import { FormBuilder } from "@formio/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";
import { userRequest } from "../http/axiosInterceptors";
import { notifySuccess } from "./ToastMessage";
import { useEffect } from "react";

const AddForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "display": "form",
    "components": []
  });

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await userRequest.get("/form/get");
        setFormData((previousValue) => ({
          ...previousValue,
          components: response?.data?.data?.components || []
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getFormData();
  }, []);

  const { display, components } = formData;
  // console.log(formData.components);

  const handleSave = async () => {
    try {
      const isConfirmed = window.confirm('Are you sure you want to save the form?');
      if (isConfirmed) {
        const response = await userRequest.put("/form/update", formData);
        notifySuccess(response.data.message);
        setTimeout(() => {
            navigate("/admin/forms")
        }, 1200);
      }
    
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="base--container">
      <header
        className="wrapper"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
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
          {"Save Form"}
        </button>
      </header>
      {/* start page */}
      <div className="row">
        <div className="col bg-light p-4 rounded mt-4">
          <FormBuilder
           form={{ display, components }}
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
