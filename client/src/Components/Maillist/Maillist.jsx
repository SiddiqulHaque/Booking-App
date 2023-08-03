import React from "react";
import "./Maillist.css";
const Maillist = () => {
  return (
    <div className="mail">
      <div className="mail-container">
        <h1 className="mail-title">Save time, save money!</h1>
        <span className="mail-desc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailinput-container">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Maillist;
