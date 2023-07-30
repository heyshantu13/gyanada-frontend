import { Form } from "@formio/react";
import { useEffect, useState } from "react";
import { userRequest } from "../http/axiosInterceptors";

const Viewer = () => {
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
  return (
    <div>
      <Form
        options={{
          saveDraft: true,
        }}
        form={{ display, components }}
        // onCustomEvent={handleFormIoEvent}
        // onSubmit={handleSubmit}
        // saveForm={handleSubmit}
        // submission={predefined}
        handleSearchPatient={(e) => console.log(e)}
        saveText="Submit Form"
        onSubmitDone={(data) => console.log(data)}
      />
    </div>
  );
};

export default Viewer;
