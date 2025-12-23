import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/pages/main";
import ProductsPage from "@/pages/productspage.jsx";
import ProductDetailPage from "@/components/ProductDetailPage.jsx";
import ApplicationPage from "@/pages/ApplicationPage";
import Nutritionist from "@/pages/nutritionist.jsx";
import Contacts from "@/pages/contacts.jsx";
import Advantages from "@/pages/advantages";
import About from "@/pages/About";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import NotificationModal from "@/components/NotificationModal";
import PromoPage from "@/pages/PromoPage";
import TourPage from "@/pages/tour";

import bgGreen from "@/assets/bg-green.svg";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Показываем прелоадер при каждом изменении маршрута
  useEffect(() => {
    setIsLoading(true);
  }, [location.pathname]);

  useEffect(() => {
    // Open modal after a short delay or immediately
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <Preloader
          key={location.pathname}
          onComplete={handlePreloaderComplete}
        />
      )}
      <ScrollToTop />
      <Header />
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <main
        className="font-lato pt-[100px] lg:pt-[225px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgGreen})` }}
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
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
