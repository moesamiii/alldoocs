import { configureStore } from "@reduxjs/toolkit";
import specializationReducer, {
  fetchSpecializations,
} from "./specializationSlice";
import doctorsReducer, { fetchDoctors } from "./doctorsSlice";

const store = configureStore({
  reducer: {
    specializations: specializationReducer,
    doctors: doctorsReducer,
  },
});

//  الحصول على ال معلومات لما اشغل التطبيق
export function initializeStoreData() {
  store.dispatch(fetchDoctors());
  store.dispatch(fetchSpecializations());
}

export default store;
