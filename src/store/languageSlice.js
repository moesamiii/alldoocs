import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    current: "ar", //  o the default way ists arabic
  },
  reducers: {
    setLanguage: (state, action) => {
      state.current = action.payload; // arbic or english
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
