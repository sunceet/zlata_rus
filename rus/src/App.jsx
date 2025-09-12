// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/main";
import ProductsPage from "./pages/productspage.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ApplicationPage from "./pages/ApplicationPage";
import Nutritionist from "./pages/nutritionist.jsx";
import Contacts from "./pages/contacts.jsx";

import Advantages from "./pages/advantages";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <main
        className="pt-[225px] bg-cover bg-center"
        style={{ backgroundImage: `url(/src/assets/bg-green.svg)` }}
      >
        <Routes>
          <Route path="/products" element={<ProductsPage />} />

          <Route
            path="/linen_oil"
            element={<ProductDetailPage idOverride={1} />}
          />
          <Route
            path="/mustard_oil"
            element={<ProductDetailPage idOverride={2} />}
          />
          <Route
            path="/sesame_oil"
            element={<ProductDetailPage idOverride={3} />}
          />
          <Route
            path="/sunflower_oil"
            element={<ProductDetailPage idOverride={4} />}
          />
          <Route
            path="/linen_flour"
            element={<ProductDetailPage idOverride={5} />}
          />
          <Route
            path="/sesame_flour"
            element={<ProductDetailPage idOverride={6} />}
          />

          {/* остальное */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/nutritionist" element={<Nutritionist />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
