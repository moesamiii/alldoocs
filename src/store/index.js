import { configureStore } from "@reduxjs/toolkit";
import specializationReducer from "./specializationSlice";
import doctorsReducer from "./doctorsSlice";

const store = configureStore({
  reducer: {
    specializations: specializationReducer,
    doctors: doctorsReducer,
  },
});

export default store;
