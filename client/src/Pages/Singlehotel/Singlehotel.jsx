import React, { useState } from "react";
import "./Singlehotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Maillist from "../../Components/Maillist/Maillist";
import Footer from "../../Components/Footer/Footer";
const Singlehotel = () => {
  const [slideno, setSlideno] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/300x240/805107.jpg?k=a98b8b88e2fbe8fe49e3f8101db798258a58929703c4db2ce72a8c8617f76804&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/300x240/941832.jpg?k=4b04ef5bfde6fb93e7ac15b5b46fb35194dba992815b9308a822eff5169bd49b&o=",
    },
  ];
  const handleOpen = (i) => {
    setSlideno(i);
    setOpen(true);
  };
  const handleMove=(direction)=>{
    let newsnumber;
    if(direction==='l'){
      newsnumber=slideno===0? 5:slideno-1;
    }
    else if(direction==="r"){
      newsnumber=slideno===5? 0 :slideno+1;
    }
    setSlideno(newsnumber)
  }
  return (
    <div className="s-hotel">
      <Navbar />
      <Header type="hotels" />
      <div className="si-container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="s-wrapper">
              <img src={photos[slideno].src} alt="" className="s-img" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
          </div>
        )}
        <div className="si-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="si-title">Hotel Gomti Inn</h1>
          <div className="si-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Akbarpur Ambedkarnagar</span>
          </div>
          <span className="si-distance">
            Excellent location Near railway station
          </span>
          <span className="si-pricehighlight">
            Cheap and Afordable stay with full comfort
          </span>
          <div className="si-images">
            {photos.map((photo, i) => (
              <div className="image-wrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="si-img"
                />
              </div>
            ))}
          </div>
          <div className="si-details">
            <div className="si-texts">
              <h1 className="si-title">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="si-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                culpa! Vel commodi modi, esse possimus fuga ipsa ducimus
                perferendis facere expedita alias nemo? Beatae aspernatur rerum
                aliquid reprehenderit eveniet dolor quia modi, numquam hic amet
                nobis unde iste ipsam quibusdam! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Veritatis, aliquam odio. At
                laudantium asperiores similique eligendi quas temporibus
                tenetur? Quaerat!
              </p>
            </div>
            <div className="si-price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Maillist />
        <Footer />
      </div>
    </div>
  );
};

export default Singlehotel;
