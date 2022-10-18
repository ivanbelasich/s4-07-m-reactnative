import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUserData: (state, action) => {
      state.push(action.payload);
    },
    deleteUserData: (state, action) => {
      return state.filter((data) => data.id !== action.payload);
    },
  },
});

export const { addUserData, deleteUserData } = userSlice.actions;
export default userSlice.reducer;
