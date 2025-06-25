import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSpecializations = createAsyncThunk(
  "specializations/fetch",
  async () => {
    const response = await axios.get(
      "https://test.newulmmed.com/api/Specialization/GetAll?page=1&pageSize=16"
    );
    console.log("API RESPONSE:", response.data);
    return Array.isArray(response.data.data) ? response.data.data : [];
  }
);

const specializationSlice = createSlice({
  name: "specializations",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecializations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpecializations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSpecializations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default specializationSlice.reducer;
