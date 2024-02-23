import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
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
    cartPost: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    cartGetByUser: builder.query({
      query: (userId) => `/cart/userId/${userId}`,
    }),
    cartUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cart/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    cartDelete: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    getBillingAddress: builder.query({
      query: () => "/billingAddress",
    }),
    getBillingAddressById: builder.query({
      query: (id) => `/billingAddress/${id}`,
    }),
    getBillingAddressByUserId: builder.query({
      query: (userId) => `/billingAddress/userId/${userId}`,
    }),
    postBillingAddress: builder.mutation({
      query: (data) => ({
        url: "/billingAddress",
        method: "POST",
        body: data,
      }),
    }),
    updateBillingAddress: builder.mutation({
      query: ({ id, data }) => ({
        url: `/billingAddress/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    getShippingAddress: builder.query({
      query: () => "/shippingAddress",
    }),
    getShippingAddressById: builder.query({
      query: (id) => `/shippingAddress/${id}`,
    }),
    getShippingAddressByUserId: builder.query({
      query: (userId) => `/shippingAddress/userId/${userId}`,
    }),
    postShippingAddress: builder.mutation({
      query: (data) => ({
        url: `/shippingAddress`,
        method: "POST",
        body: data,
      }),
    }),
    updateShippingAddress: builder.mutation({
      query: ({ id, data }) => ({
        url: `/shippingAddress/${id}`,
        method: "PUT",
        body: data,
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
  useCartPostMutation,
  useCartGetByUserQuery,
  useCartUpdateMutation,
  useCartDeleteMutation,
  useGetBillingAddressQuery,
  useGetBillingAddressByIdQuery,
  useGetBillingAddressByUserIdQuery,
  usePostBillingAddressMutation,
  useUpdateBillingAddressMutation,
  useGetShippingAddressQuery,
  useGetShippingAddressByIdQuery,
  useGetShippingAddressByUserIdQuery,
  usePostShippingAddressMutation,
  useUpdateShippingAddressMutation,
} = Api;
