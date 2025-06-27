import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://newulmmed.com/api/Doctor/GetAllDoctors?pageNumber=1&pageSize=10"
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
