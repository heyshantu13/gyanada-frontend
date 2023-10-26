import { Form } from "@formio/react";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  // Wrap the handleSubmit function with useCallback
  const handleSubmit = useCallback(async (response) => {
    if (isSubmitting) {
      return; // If already submitting, do nothing
    }

    setIsSubmitting(true); // Set submitting state to true

    try {
      const data = await axios.post(`${BASE_URL}/form/store`, response, {
        headers: {
          Authorization: token,
        },
      });
      console.log(data);
      notifySuccess("Student added Successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  }, [isSubmitting, token]); // Include isSubmitting and token in the dependency array

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/form/get`, {
          headers: {
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
  }, [token]); // Include token in the dependency array

  const { display, components } = formData;
  return (
    <div className="app--native">
      <Form
        options={{
          saveDraft: true,
        }}
        form={{ display, components }}
        onSubmit={handleSubmit}
        saveText="Submit Form"
        disableSubmit={isSubmitting} // Disable the submit button when submitting
      />
    </div>
  );
};

export default FormRenderer;
