import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../Axios/axios'; 
import axios from 'axios';

// Create an async thunk
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (data) => {   
    console.log("Dataee =====>",data)
      const response = await axiosInstance.post('/api/register',{name:data.name,hashed_password:data.password,email:data.email})
      return response;
    }
  );

  const userSlice = createSlice({
    name: 'user',
    initialState: {
      userData: null,
      loading: false,
      error: null,
      status:null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })

        .addCase(fetchUserData.fulfilled, (state, action) => {
        console.log("my payload",action.payload)
          state.loading = false;
          state.userData = action.payload.data;
          state.status = action.payload.status;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  // Export the action creator
  export const { actions: userActions } = userSlice;
  
  // Export the reducer
  export default userSlice.reducer;