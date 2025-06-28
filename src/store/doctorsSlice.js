import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// this for get all doctors without filtering
const fetchDoctors = createAsyncThunk("doctors/fetchAll", async () => {
  const response = await axios.get(
    "https://test.newulmmed.com/api/Doctor/GetAllDoctors"
  );
  return response.data.data;
});

// in this code this is the way to get doctor depend on his spepcialization
const fetchDoctorsBySpecialization = createAsyncThunk(
  "doctors/fetchBySpecialization",
  async (specializationId) => {
    const response = await axios.get(
      `https://test.newulmmed.com/api/Doctor/GetAllDoctors?specializationId=${specializationId}`
    );
    return response.data.data;
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
        state.error = action.error.message;
      })

      .addCase(fetchDoctorsBySpecialization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorsBySpecialization.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctorsBySpecialization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//  this is the good wat to export it
export { fetchDoctors, fetchDoctorsBySpecialization };

export default doctorsSlice.reducer;
