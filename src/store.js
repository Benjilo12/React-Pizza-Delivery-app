import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/user/userSlice";

//so we import the reducer from the userslice and store in the store.js for export
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
