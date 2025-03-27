// weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// Helper function to get user coordinates
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
      );
    }
  });
};

export const fetchWeatherByLocation = createAsyncThunk(
  'weather/fetchWeatherByLocation',
  async (_, { rejectWithValue }) => {
    try {
      const { latitude: lat, longitude: lon } = await getUserLocation();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error('Weather request failed');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
    locationPermission: null
  },
  reducers: {
    resetWeatherError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.locationPermission = 'granted';
      })
      .addCase(fetchWeatherByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.locationPermission = action.payload.includes('denied') ? 'denied' : 'error';
      });
  }
});

export const { resetWeatherError } = weatherSlice.actions;
export default weatherSlice.reducer;