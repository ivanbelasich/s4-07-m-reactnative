import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    addJobsData: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const {  addJobsData } = jobSlice .actions;
export default jobSlice.reducer;