import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartslice";
//so we import the reducer from the userslice and store in the store.js for export
const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
