import { Form } from "@formio/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../http/axiosInterceptors";

const FormRenderer = () => {
  const [formData, setFormData] = useState({
    display: "form",
    components: [],
  });
  // const location = window.location;
  // const queryParams = QueryString.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });
  // const paramValue = queryParams.paramName;
  // console.log(paramValue);

  const token = useLocation().search.split("=")[1];

  const BASE_URL = "http://13.232.230.93:9090/api/web/form";
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get`, {
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
    // logic
    console.log(response);
    const data = await axios.post(`${BASE_URL}/store`, response, {
      headers: {
        //this should be dynamic
        Authorization: token,
      },
    });
    console.log(data);
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
        saveForm={handleSubmit}
        saveText="Submit Form"
        onSubmitDone={(data) => console.log(data)}
      />
    </div>
  );
};

export default FormRenderer;
