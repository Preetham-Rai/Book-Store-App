import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cart/cartSlice";
import booksAPI from "./features/books/booksAPI";
import orderApi from "./features/orders/ordersApi";

export default configureStore({
  reducer: {
    cart: cartReducer,
    [booksAPI.reducerPath]: booksAPI.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware, orderApi.middleware),
});
