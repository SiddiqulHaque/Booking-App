import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./Hotels.css";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import Hotelresult from "../../Components/Hotelresult/Hotelresult";
const Hotels = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [opendate,setOpendate]=useState(false);
  return (
    <>
      <Navbar />
      <Header type="hotels" />
      <div className="hotels-container">
        <div className="hotels-wrapper">
          <div className="hotels-search">
            <h1 className="hsearch-title">Search</h1>
            <div className="hsearch-item">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="hsearch-item">
              <label htmlFor="">Check-in-date</label>
              <span onClick={()=>setOpendate(!opendate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              { opendate && 
              
              <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                rangeColors={["#2B7A78"]}
                minDate={new Date()}
              />
             }
            </div>
            <div className="hsearch-item">
              <label htmlFor="">Options</label>
              <div className="option-item">
                <span className="option-text">Min Price <small>per night</small></span>
                <input type="number" className="option-input" />
              </div>
              <div className="option-item">
                <span className="option-text">Max Price <small>per night</small></span>
                <input type="number" className="option-input" />
              </div>
              <div className="option-item">
                <span className="option-text" >Adult</span>
                <input type="number" min='1' placeholder={options.adult}className="option-input" />
              </div>
              <div className="option-item">
                <span className="option-text">Children</span>
                <input type="number" min="0" className="option-input" placeholder={options.children} />
              </div>
              <div className="option-item">
                <span className="option-text">Rooms</span>
                <input type="number" min="1" className="option-input" placeholder={options.room} />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hotels-result">
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
            <Hotelresult/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
