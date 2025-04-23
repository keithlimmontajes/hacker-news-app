import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../api-config';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getAllNewsId: builder.query<Array<number>, void>({
      query: () => ({
        url: '/topstories.json',
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        if (Array.isArray(response)) {
          return response.sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        return response;
      },
    }),
    getNewsDetailsBatch: builder.query<any[], number[]>({
      async queryFn(ids, _queryApi, _extraOptions, baseQuery) {
        try {
          const results = await Promise.all(
            ids.map(id => baseQuery({url: `/item/${id}.json`})),
          );

          const data = results
            .map(res => (res.data ? res.data : null))
            .filter(Boolean)
            .sort((a: any, b: any) => a.score - b.score);

          return {data};
        } catch (error: any) {
          return {error};
        }
      },
    }),
    getNewsAuthor: builder.query<any, any>({
      query: (id: string) => ({
        url: `/user/${id}.json`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllNewsIdQuery,
  useGetNewsDetailsBatchQuery,
  useGetNewsAuthorQuery,
} = newsApi;
