import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './API/userApi'
import { userSlice } from './Slices/userSlice'
import { tasksApi } from './API/tasksApi'

// Configures the Redux store with the reducers and middleware
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,  // Configures the reducer for the userApi slice
    [tasksApi.reducerPath]: tasksApi.reducer,  // Configures the reducer for the tasksApi slice
    User: userSlice.reducer, // Configures the reducer for the userSlice
  },

  // Combines the middleware used by Redux Toolkit Query with the default middleware for Redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, tasksApi.middleware),
})

// Sets up the listeners for the store, allowing RTK Query to automatically handle cache updates and error handling
setupListeners(store.dispatch)
