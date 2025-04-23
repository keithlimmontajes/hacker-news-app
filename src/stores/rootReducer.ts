import {combineReducers} from '@reduxjs/toolkit';

/** Slices */
import newsSlice from './slices/newsSlice';

/** Api */
import {newsApi} from '../services/news';

/** Add new Reducers here */
const rootReducer = combineReducers({
  newsSlice,
  [newsApi.reducerPath]: newsApi.reducer,
});

export default rootReducer;
