import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import ProductAdmin from "./screens/ProductAdmin";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <Header />
      <main className="container pb-8 bg-cream">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/products" element={<ProductAdmin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
