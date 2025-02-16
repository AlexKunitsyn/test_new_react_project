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
const ApiKey = '48813494-c290a9bbe0a2ba83d5af828e7';
export const generalApi = createApi({
    reducerPath: 'api', // Имя среза в сторе
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pixabay.com/api' }), // Базовый URL API
    endpoints: (builder) => ({
        // Пример GET-запроса для получения списка постов
        // getPosts: builder.query({
        //     query: () => '/posts', // Относительный путь к эндпоинту
        //     query: (arg) => {
        //         // const { customerId, currencyId, customerCartId, list } = arg;
        //         return {
        //             url: '/posts',
        //             method: 'get',
        //             // data: {
        //             //     customer_cart_id: customerCartId,
        //             //     customer_id: customerId,
        //             //     show_currency_id: currencyId,
        //             //     list,
        //             // },
        //         };
        //     },
        // }),
        // Пример POST-запроса для создания нового поста
        // addPost: builder.mutation({
        //     query: (newPost) => ({
        //         url: '/posts',
        //         method: 'POST',
        //         body: newPost,
        //     }),
        // }),
        //
        // // get photos list
        // getPhotoList: builder.query({
        //     query: () => ({
        //         url: '/photos/1',
        //         method: 'GET',
        //
        //     }),
        // }),
        //
        // // get photos list
        // getAlbums: builder.query({
        //     query: () => ({
        //         url: '/albums/1/photos',
        //         method: 'GET',
        //
        //     }),
        // }),
        // get photos Lexica API
        getAlbumsLexicaApi: builder.query({
            query: (query) => ({
                url: `/?key=${ApiKey}&q=${query}&image_type=photo&pretty=true`,
                method: 'GET',

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
export const {
    // useLazyGetPostsQuery,
    // useAddPostMutation,
    // useLazyGetPhotoListQuery,
    // useLazyGetAlbumsQuery ,
    useLazyGetAlbumsLexicaApiQuery
} = generalApi;

