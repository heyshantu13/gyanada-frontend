import { FormBuilder } from "@formio/react";
import { useState } from "react";
import { formIoData } from "../assets/FormIoData";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { saveForm } from "../redux/formSlice";

const AddForm = () => {
  const [formData, setFormData] = useState();
  // console.log(formData.components);

  const dispatch = useDispatch();
  const formDataInStore = useSelector((state) => state.forms);
  console.log(formDataInStore);

  const handleSave = () => {
    // console.log(formData.components);
    dispatch(saveForm(formDataInStore));
  };

  return (
    <div className="base--container">
      <div className="form--builder--header">
        <h3>Create Form</h3>
        <button onClick={handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
      <FormBuilder
        form={formDataInStore}
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
  );
};

export default AddForm;
