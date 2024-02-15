import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
    }),
    getCurrentUser: builder.query({
      query: (email) => `/users/email/${email}`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    getProduct: builder.query({
      query: () => "/products",
    }),
    getProductByUserId: builder.query({
      query: (id) => `/products/userId/${id}`,
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCurrentUserQuery,
  useGetProductQuery,
  useGetProductByUserIdQuery,
  useDeleteUserMutation,
  usePostUserMutation,
  useLoginUserMutation,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = Api;
