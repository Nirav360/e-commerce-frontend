import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import ProductDetail from "./components/product-details/ProductDetail";
import Layout from "./components/layout/Layout";
import ProductsPage from "./components/products/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
