import {createSlice} from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'onboard',
  initialState: {
    data: {},
    loading: false,
    error: {},
  },
  reducers: {
    setOnboarding: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const {setOnboarding} = newsSlice.actions;
export default newsSlice.reducer;
