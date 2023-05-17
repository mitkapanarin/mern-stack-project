folder API in client/API will deal with API from the folder server/routes

* in order to connect frntend with backend we have to install  cors in folder server/index.js

* In a full-stack React application, it is common to separate the code for the client-side (frontend) and the server-side (backend) into separate folders. The "slice" in the client folder is referring to a folder or file that contains code for managing data on the client-side.

When a user logs into the application, the client-side code needs to keep track of that user's identity and credentials so that it can make requests to the server-side code on behalf of the user. This is typically done using some form of client-side state management library, such as Redux or the newer React Context API.

A "slice" in Redux is a collection of Redux actions and reducers that are related to a particular piece of state in the application. For example, if the application needs to manage a list of tasks, there might be a "tasks" slice that contains actions and reducers for adding, updating, and deleting tasks. Similarly, there might be a "user" slice that contains actions and reducers for managing user authentication and authorization.

In this context, the "tasks API" and "user API" files are modules that provide functions for making API requests to the server-side code. These functions might be used in the actions and reducers for the "tasks" and "user" slices, respectively, to update the client-side state based on data returned from the server.

Overall, the purpose of the "slice" in the client folder is to manage client-side state and provide a clear separation of concerns between the client-side and server-side code. The "tasks API" and "user API" files are  part of the implementation of the client-side state management and are used to communicate with the server-side code.

* First we wrote function about UserLogin, Now we should manage the state so that when we are logged in application, we should be able to see User and Tasks pages. In order to be able to do that in client/store/slices we should make file UsreSlice.jsx .
in this file userSlice.jsx first we are  importing the createSlice function from the @reduxjs/toolkit library.
* RTK Querry is used to make API
* RTK is used to make slices----->if we go to official documentation on <https://redux-toolkit.js.org/-------->get> started----->API reference---->Reducers and actions--->Create slice

createSlice is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slice reducers. A slice is a portion of your Redux store that is responsible for managing the state of a specific feature in your application. A slice reducer is a function that takes an initial state and an action, and returns a new state based on the action.

By using createSlice, you can define your slice reducer logic and the initial state for your slice in a more concise and intuitive way, without having to manually define action types and action creators.
