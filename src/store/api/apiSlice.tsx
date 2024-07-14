import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../../types/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    /* this returns user array and we dont have a query param so it is void */
    getUsers: builder.query<User[], void>({
      query: () => `/users`,
      providesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
    addUser: builder.mutation<User, User>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
});
