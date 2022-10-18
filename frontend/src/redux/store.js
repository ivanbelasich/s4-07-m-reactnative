import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/JobsSlice";
import { userApi } from "./apis/userApi";
import userReducer from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
