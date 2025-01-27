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

const API_KEY = 'GLSsEG4TOZ1WfStWbRV2taqBGqmHNgEoky6pG0hPf1XS4LjKaBq8Iblt';

export const pixelsApi = createApi({
    reducerPath: 'pixelsApi', // Имя среза в сторе
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.pexels.com/v1/' }), // Базовый URL API
    prepareHeaders: (headers) => {
        headers.set('Authorization', 'GLSsEG4TOZ1WfStWbRV2taqBGqmHNgEoky6pG0hPf1XS4LjKaBq8Iblt'); // Устанавливаем ключ API
        return headers;
    },
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: (query) => `search?query=${query}&per_page=20`, // Параметры запроса
        }),
    }),
});

export const { useLazyGetPhotosQuery } = pixelsApi;

