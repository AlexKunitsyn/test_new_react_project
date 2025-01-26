import { IGeneralData } from '../../types/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface IGeneralDataRequest {
  customer_id: number;
}

interface IStaticPageRequest {
  slug: string;
}

export interface IGeneralDataResponse {
  data: IGeneralData;
}
export const generalApi = createApi({
    reducerPath: 'api', // Имя среза в сторе
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Базовый URL API
    endpoints: (builder) => ({
        // Пример GET-запроса для получения списка постов
        getPosts: builder.query({
            query: () => '/posts', // Относительный путь к эндпоинту
        }),
        // Пример POST-запроса для создания нового поста
        addPost: builder.mutation({
            query: (newPost) => ({
                url: '/posts',
                method: 'POST',
                body: newPost,
            }),
        }),
    }),
});

// export const generalApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getFrontEndData: build.query<IGeneralDataResponse, IGeneralDataRequest>({
//       query: (arg) => {
//         const { customer_id } = arg;
//         return {
//           url: 'api/get-frontend-data/',
//           method: 'post',
//           data: {
//             customer_id,
//           },
//         };
//       },
//       keepUnusedDataFor: 0,
//       providesTags: ['General', 'FrontEndData'],
//     }),
//     getStaticPage: build.query<any, IStaticPageRequest>({
//       query: (arg) => {
//         const { slug } = arg;
//         return {
//           url: 'api/static-page/',
//           method: 'post',
//           data: {
//             slug,
//           },
//         };
//       },
//       keepUnusedDataFor: 0,
//       providesTags: ['General'],
//     }),
//   }),
// });
// Экспортируем хуки для работы с запросами
export const { useGetPostsQuery, useAddPostMutation } = generalApi;

