import { FormBuilder } from "@formio/react";

const AddForm = () => {
  return (
    <div className="base--container">
      <FormBuilder
        form={{ display: "form" }}
        onChange={(schema) => console.log(schema)}
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
