import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cart/cartSlice";
import booksAPI from "./features/books/booksAPI";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [booksAPI.reducerPath]: booksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),
});
