import { Form } from "@formio/react";
import { formIoData } from "../assets/FormIoData";

const Viewer = () => {
  return (
    <div>
      <Form
        options={{
          saveDraft: true,
        }}
        form={formIoData}
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
