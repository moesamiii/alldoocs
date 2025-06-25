import { configureStore } from "@reduxjs/toolkit";
import specializationReducer from "./specializationSlice";

const store = configureStore({
  reducer: {
    specializations: specializationReducer,
  },
});

export default store;
