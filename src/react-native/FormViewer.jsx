import { Form } from "@formio/react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../http/axiosInterceptors";
// import { useParams } from "react-router-dom";
import axios from "axios";

const FormViewer = () => {
  const [formData, setFormData] = useState({
    display: "form",
    components: [],
  });

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/form/get`, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM0Zjk1ZDZhNGUwZGI5YzRiMmQ0MGQiLCJmdWxsbmFtZSI6ImFuc2h1bCIsImlhdCI6MTY5MTUwMjc2NywiZXhwIjoxNjkxNjc1NTY3fQ.ENCKvPidm6K91GBhjA-hesKeEZqRtZ9zlf3s13dLoxI",
          },
        });
        setFormData((previousValue) => ({
          ...previousValue,
          components: response?.data?.data?.components || [],
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getFormData();
  }, []);

  const handleFormIoEvent = () => {
    // logic here
  };

  const handleSubmit = () => {
    // logic here
  };

  const predefined = () => {
    // logic here
  };

  return (
    <div>
      <Form
        options={{
          saveDraft: true,
        }}
        form={formData}
        onCustomEvent={handleFormIoEvent}
        onSubmit={handleSubmit}
        saveForm={handleSubmit}
        submission={predefined}
        handleSearchPatient={(e) => console.log(e)}
        saveText="Submit Form"
        onSubmitDone={(data) => console.log(data)}
      />
    </div>
  );
};

export default FormViewer;
