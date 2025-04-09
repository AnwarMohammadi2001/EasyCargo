import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";

const Home = () => {
  return (
    <div>
      <header className=" w-full transition-colors duration-500 ">
        <div className="">
          <Header />
          <Navbar />
        </div>
      </header>
      <main className=""></main>
    </div>
  );
};

export default Home;
