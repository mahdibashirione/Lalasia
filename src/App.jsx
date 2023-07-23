import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/Cart";
import Layout from "./Layout/Layout";

function App() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/product/:id", element: <SingleProduct /> },
  ]);

  return <Layout>{element}</Layout>;
}

export default App;
