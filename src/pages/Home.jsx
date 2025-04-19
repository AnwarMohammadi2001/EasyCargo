import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/services";
import WhyChooseUs from "../components/WhyChooseUs";
import TrackingSection from "../components/TrackingSection";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import PartnersSection from "../components/PartnersSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhoWeAre from "../components/Hero/whoWeAre";
import HeroMain from "../components/Hero/HeroMain";
import Facts from "../components/Facts";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className=" dark:bg-zinc-900 transition-colors duration-500">
      {/* <Hero /> */}
      <HeroMain />
      <WhoWeAre />
      <Facts />
      <Services />
      <WhyChooseUs />
      <TrackingSection />
      <Testimonials />
      <HowItWorks />
      <PartnersSection />
      <ContactSection />
    </div>
  );
};

export default Home;
