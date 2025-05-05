import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = "k7SOSg9doEcsXInjSHhQeW4RpvzGHmoMdvs3K1R92yx";

// Async thunk to fetch task details
export const fetchTasks = createAsyncThunk(
  'task/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://docapi.foyr.com/api/task', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.data?.data?.tasks) {
        throw new Error('Invalid response structure');
      }

      return response.data.data.tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;
