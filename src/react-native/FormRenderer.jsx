import { Form } from "@formio/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

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

  const token = useLocation().search.split("=")[1]

  const BASE_URL = "http://192.168.160.134:8082/api/web/form/get";
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await axios.get(BASE_URL, {
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

  const handleFormIoEvent = () => {
    // logic
  };
  const handleSubmit = () => {
    // logic
  };
  const predefined = () => {
    // logic
  };

  const { display, components } = formData;
  return (
    <div className="app--native">
      <Form
        options={{
          saveDraft: true,
        }}
        form={{ display, components }}
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

export default FormRenderer;
