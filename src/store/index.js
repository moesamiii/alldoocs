import { configureStore } from "@reduxjs/toolkit";
import specializationReducer, {
  fetchSpecializations,
} from "./specializationSlice";
import doctorsReducer, { fetchDoctors } from "./doctorsSlice";
import languageReducer from "./languageSlice"; //

const store = configureStore({
  reducer: {
    specializations: specializationReducer,
    doctors: doctorsReducer,
    language: languageReducer, //
  },
});

export function initializeStoreData() {
  store.dispatch(fetchDoctors());
  store.dispatch(fetchSpecializations());
}

export default store;
