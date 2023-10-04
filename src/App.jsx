import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import HomePage from "./components/home/HomePage";
import ProductDetail from "./components/products/ProductDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
