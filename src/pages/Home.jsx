import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/services";
import WhyChooseUs from "../components/WhyChooseUs";
import TrackingSection from "../components/TrackingSection";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="bg-amber-50 dark:bg-zinc-900 transition-colors duration-500">
      <header className="w-full transition-colors duration-500">
        <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
        <Navbar isNavOpen={isNavOpen} toggleNav={closeNav} />
      </header>
      <main className="">
        <Hero />
        <Services />
        <WhyChooseUs />
        <TrackingSection />
        <Testimonials />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Home;
