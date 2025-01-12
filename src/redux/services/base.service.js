// import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// import { axiosBaseQuery } from '../config/axios';
// import * as process from 'process';
// import { HYDRATE } from 'next-redux-wrapper';
//
//
// const customBaseQuery = retry(
//   axiosBaseQuery({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL as string }),
//   {
//     maxRetries: 0,
//   }
// );
//
// export const baseApi = createApi({
//   baseQuery: customBaseQuery,
//   reducerPath: 'base',
//   tagTypes: ['General', 'FrontEndData', 'SearchByName', 'UpdateAuto', 'UpdateCart', 'UpdateWaitList'],
//   extractRehydrationInfo(action, { reducerPath }) {
//     if (action.type === HYDRATE) {
//       return action.payload[reducerPath];
//     }
//   },
//   endpoints: (build) => ({}),
// });
//
// export const {} = baseApi;
// export const {} = baseApi.endpoints;
