import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import Layout from "./components/layout/Layout";
import Spinner from "./components/spinner/Spinner";

const ProductDetail = lazy(() =>
  import("./components/product-details/ProductDetail")
);
const ProductsPage = lazy(() => import("./components/products/ProductsPage"));
const HomePage = lazy(() => import("./components/home/HomePage"));
const CartPage = lazy(() => import("./components/cart/CartPage"));
const ShippingPage = lazy(() => import("./components/cart/ShippingPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" exact element={<LoginPage type={"login"} />} />
          <Route path="/register" element={<LoginPage type={"register"} />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
