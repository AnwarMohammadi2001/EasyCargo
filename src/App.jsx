import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services/services";
import TrackingSection from "./components/TrackingSection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<TrackingSection />} />
          <Route path="/gallery" element={<Testimonials />} />
          <Route path="/contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
