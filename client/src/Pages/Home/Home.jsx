import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import "./Home.css";
import Propertylist from "../../Components/Propertylist/Propertylist";
import Fp from "../../Components/FeaturedProperties/Fp";
import Maillist from "../../Components/Maillist/Maillist";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by Property type</h1>
        <Propertylist />

        <h1 className="fp-title">Homes guests love</h1>
        <Fp />
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};

export default Home;
