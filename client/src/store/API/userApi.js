import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  // Define a reducer path for this API, which will be used internally by Redux Toolkit
  reducerPath: "userApi",

  // Define an array of tag types to be used in caching API responses
  tagTypes: ["Users"],

  // Define a base query to use for all requests, with the base URL for the API
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_BASE_URL}/auth`, // we imprt this from the client/.env
  }), //we use import.meta.env instead f process.env beacuse this is Vite project, not React

  // Define the expected endpoints for this API, using a builder object
  endpoints: (builder) => ({
    // Define a "getUser" endpoint that sends a GET request to the root URL of the API
    getUser: builder.query({
      query: (name) => `/`,
      providesTags: ["Users"], // if we have query we use providesTags
    }),

    // Define an "updateUser" endpoint that sends a PUT request to a URL that includes the ID of the user to update
    // updateUser: builder.mutation({
    //   uery: ({ userID, updatedData }) => ({
    //     url: `/update-user/${userID}`,
    //     method: "PUT",
    //     body: updatedData
    //   }),
    //   invalidatesTags: ["Users"], // if we have mutation we use invalidatesTags
    // }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `/update-user/${body.userID}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    // Define a "createUser" endpoint that sends a POST request to the root URL of the API
    createUser: builder.mutation({
      query: (body) => ({
        url: "/create-users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    // Define a "loginUser" endpoint that sends a POST request to a URL for user authentication
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const{useCreateUserMutation, useGetUserQuery, useLoginUserMutation, useUpdateUserMutation} = userApi
