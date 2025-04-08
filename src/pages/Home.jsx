import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header className="fixed w-full z-60  transition-colors duration-500 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <Navbar />
        </div>
      </header>
      <main className="">
      </main>
    </div>
  );
};

export default Home;
