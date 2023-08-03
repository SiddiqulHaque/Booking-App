import React from "react";
import "./Featured.css";
import useFetch from "../../Hooks/useFetch";


const Featured = () => {
  const { data, loading, err } = useFetch(
    "/hotels/countbycity?cities=Agra,Delhi,Aligarh"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait "
      ) : (
        <>
          <div className="featured-item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o="
              alt=""
              className="featured-img"
            />
            <div className="featured-title">
              
              <h1>Lucknow</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featured-item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
              alt=""
              className="featured-img"
            />
            <div className="featured-title">
              
              <h1>Aligarh</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featured-item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
              alt=""
              className="featured-img"
            />
            <div className="featured-title">
              
              <h1>Agra</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
