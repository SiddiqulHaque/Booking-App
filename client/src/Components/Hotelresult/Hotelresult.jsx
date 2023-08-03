import React from 'react'
import "./Hotelresult.css"
import { Link, useNavigate } from 'react-router-dom'
const Hotelresult = () => {
  const navigate=useNavigate();
  return (
    <div className="Hotel-result">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o="
        alt=""
        className="h-img"
      />
      <div className="h-desc">
      <Link to="/hotels/123" style={{textDecoration:"none"}}><h1 className="h-title" >Tower Street Apartments</h1></Link>
        
        <span className="h-distance">500m from center</span>
        <span className="h-taxi">Free airport taxi</span>
        <span className="h-sub">
          Studio Apartment with Air conditioning
        </span>
        <span className="h-features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="h-cancelop">Free cancellation </span>
        <span className="h-cancelopsub">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="h-details">
        <div className="h-rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="h-detaildesc">
          <span className="h-price">$112</span>
          <span className="h-taxop">Includes taxes and fees</span>
          <button className="h-checkbtn">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default Hotelresult