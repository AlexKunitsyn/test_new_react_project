// import { IGeneralData } from '../../types/index';
// import { baseApi } from './base.service';
//
// interface IGeneralDataRequest {
//   customer_id: number;
// }
//
// interface IStaticPageRequest {
//   slug: string;
// }
//
// export interface IGeneralDataResponse {
//   data: IGeneralData;
// }
//
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
//
// export const { useGetFrontEndDataQuery, useLazyGetStaticPageQuery } = generalApi;
//
// export const {} = generalApi.endpoints;
