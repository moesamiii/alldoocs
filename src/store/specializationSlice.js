import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// جلب كل التخصصات
export const fetchSpecializations = createAsyncThunk(
  "specializations/fetchAll",
  async () => {
    const response = await axios.get(
      "https://newulmmed.com/api/Specialization/GetAll?page=1&pageSize=16"
    );
    return Array.isArray(response.data.data) ? response.data.data : [];
  }
);

// ✅ جلب تخصص واحد حسب ID
export const fetchSpecializationById = createAsyncThunk(
  "specializations/fetchById",
  async (id) => {
    const response = await axios.get(
      `https://test.newulmmed.com/api/Specialization/GetById/${id}`
    );
    return response.data.data;
  }
);

const specializationSlice = createSlice({
  name: "specializations",
  initialState: {
    list: [],
    loading: false,
    error: null,
    selected: null, // التخصص الحالي من API
  },
  reducers: {},
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
      })

      // ✅ حالة تحميل تخصص واحد
      .addCase(fetchSpecializationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpecializationById.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchSpecializationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default specializationSlice.reducer;
