import { Form } from "@formio/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../http/axiosInterceptors";
import { notifyError, notifySuccess } from "../components/ToastMessage";

const FormRenderer = () => {
  const [formData, setFormData] = useState({
    display: "form",
    components: [],
  });

  const token = useLocation().search.split("=")[1];

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/form/get`, {
          headers: {
            //this should be dynamic
            Authorization: token,
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

  const handleSubmit = async (response) => {
    try {
      const data = await axios.post(`${BASE_URL}/form/store`, response, {
        headers: {
          //this should be dynamic
          Authorization: token,
        },
      });
      console.log(data);
      notifySuccess("Student added Successfully");
    } catch (error) {
      console.log(error);
      // notifyError("Something went wrong, please try again");
    }
  };

  const { display, components } = formData;
  return (
    <div className="app--native">
      <Form
        options={{
          saveDraft: true,
        }}
        form={{ display, components }}
        onSubmit={handleSubmit}
        // saveForm={handleSubmit}
        saveText="Submit Form"
      />
    </div>
  );
};

export default FormRenderer;
