import { FormBuilder } from "@formio/react";
import { useState } from "react";
import { formIoData } from "../assets/FormIoData";

const AddForm = () => {
  const [formData, setFormData] = useState();
  console.log(formData);

  const handleSave = () => {
    // Saving created form into DB
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
        form={formIoData}
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
