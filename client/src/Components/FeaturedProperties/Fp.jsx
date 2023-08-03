import React from "react";
import "./Fp.css";
import useFetch from "../../Hooks/useFetch";
const Fp = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true");
  console.log(data);
  return (
    <div className="fp-container">
      {loading ? (
        "Loading "
      ) : (
        <>
          {data.map((item) => (
            <div className="fp-item" key={item._id}>
              <img
                src={
                  item.photos.length===0
                    ? "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                    : item.photos[0]
                }
                alt=""
                className="fp-img"
              />
              <span className="fp-name">{item.name}</span>
              <span className="fp-city">{item.city}</span>
              <span className="fp-price">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fp-rating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Fp;
