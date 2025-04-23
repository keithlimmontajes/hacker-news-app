import {Platform} from 'react-native';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';

export const baseURL = 'https://hacker-news.firebaseio.com/v0';

export const setHeaders = async (headers: any) => {
  headers.set('device-type', Platform.OS);
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
};

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: async headers => await setHeaders(headers),
});
