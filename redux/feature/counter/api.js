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
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
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
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
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
    postPayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: data,
      }),
    }),
    postOrder: builder.mutation({
      query: (data) => ({
        url: "/order_history",
        method: "POST",
        body: data,
      }),
    }),
    getOrderByUserId: builder.query({
      query: (userId) => `/order_history/userId/${userId}`,
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
  useGetProductQuery,
  useGetProductByUserIdQuery,
  useDeleteUserMutation,
  usePostUserMutation,
  useLoginUserMutation,
  usePostProductMutation,
  useGetProductByIdQuery,
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
  usePostPaymentMutation,
  usePostOrderMutation,
  useGetOrderByUserIdQuery,
} = Api;
