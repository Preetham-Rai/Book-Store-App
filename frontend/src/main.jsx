import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./components/Register.jsx";
import "sweetalert2/dist/sweetalert2.js";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import SingleBook from "./components/SingleBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/order",
        element: <div>Orders</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
