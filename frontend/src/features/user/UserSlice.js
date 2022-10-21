import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUserData: (state, action) => {
      state[0] = action.payload;
    },
    deleteUserData: (state, action) => {
     return state.filter((user) => user.user._id !== action.payload);
    },
  },
});

export const { addUserData, deleteUserData } = userSlice.actions;
export default userSlice.reducer;
