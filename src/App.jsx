import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import BackToTopButton from "./components/BackToTopButton";

const App = () => (
  <Router>
    <div className="flex-grow">
      <Header />
      <Routes>
        {/* Define your existing routes */}
        <Route path="/" element={<LandingPage />} />
        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  </Router>
);

export default App;
