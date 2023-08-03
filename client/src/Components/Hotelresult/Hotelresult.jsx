import React from "react";
import "./Hotelresult.css";
import { Link, useNavigate } from "react-router-dom";
const Hotelresult = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="Hotel-result">
      <img
        src={
          item.photos.length === 0
            ? "https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o="
            : item.phots[0]
        }
        alt=""
        className="h-img"
      />
      <div className="h-desc">
        <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none" }}>
          <h1 className="h-title">{item.name}</h1>
        </Link>

        <span className="h-distance">{item.distance}</span>
        <span className="h-taxi">Free airport taxi</span>
        <span className="h-sub">Studio Apartment with Air conditioning</span>
        <span className="h-features">{item.desc}</span>
        <span className="h-cancelop">Free cancellation </span>
        <span className="h-cancelopsub">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="h-details">
        {item.rating && (
          <div className="h-rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className="h-detaildesc">
          <span className="h-price">${item.cheapestPrice}</span>
          <span className="h-taxop">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="h-checkbtn">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotelresult;
