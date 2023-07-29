import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "form",
  components: [
    {
      label: "Columns",
      columns: [
        {
          components: [
            {
              label: "Name",
              tableView: true,
              key: "studentName",
              type: "textfield",
              input: true,
            },
            {
              label: "Email",
              tableView: true,
              key: "email",
              type: "textfield",
              input: true,
            },
            {
              label: "Phone number",
              mask: false,
              tableView: false,
              delimiter: false,
              requireDecimal: false,
              inputFormat: "plain",
              truncateMultipleSpaces: false,
              key: "phoneNumber",
              type: "number",
              input: true,
            },
          ],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0,
          size: "md",
          currentWidth: 6,
        },
        {
          components: [
            {
              label: "Age",
              mask: false,
              tableView: false,
              delimiter: false,
              requireDecimal: false,
              inputFormat: "plain",
              truncateMultipleSpaces: false,
              key: "age",
              type: "number",
              input: true,
            },
            {
              label: "Collage Name",
              tableView: true,
              key: "collageName",
              type: "textfield",
              input: true,
            },
            {
              label: "Course studying",
              tableView: true,
              key: "courseStudying",
              type: "textfield",
              input: true,
            },
          ],
          width: 6,
          offset: 0,
          push: 0,
          pull: 0,
          size: "md",
          currentWidth: 6,
        },
      ],
      key: "columns",
      type: "columns",
      input: false,
      tableView: false,
    },
  ],
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    saveForm: (state, action) => {
      state = action.payload;
      console.log(action.payload);
    },
  },
});

export const { saveForm } = formSlice.actions;
export default formSlice.reducer;
