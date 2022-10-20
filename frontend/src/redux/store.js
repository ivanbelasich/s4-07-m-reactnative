import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import jobsReducer from "../features/jobs/JobSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer
  },
});

export default store;
