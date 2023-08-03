import React, { useContext, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { SearchContext, searchContext } from "../../Context/SearchContext";
const Header = ({ type }) => {
  const navigate = useNavigate();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setopenDate] = useState(false);
  const [openoptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");
  const { dispatch } = useContext(SearchContext);
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "hotels"
            ? "header-container hotels-mode"
            : "header-container"
        }
      >
        <div className="header-list">
          <div className="headerlist-items active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerlist-items">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerlist-items">
            <FontAwesomeIcon icon={faCar} />
            <span>Rentals</span>
          </div>
          <div className="headerlist-items">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {type !== "hotels" && (
          <>
            <h1 className="header-title">Find your next stay</h1>
            <p className="header-desc">
              Search low prices on hotels, homes and much more...
            </p>
            <button className="header-button">Login/Register</button>
            <div className="header-search">
              <div className="headersearch-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="header-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headersearch-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  onClick={() => setopenDate(!openDate)}
                  className="header-text"
                >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    rangeColors={["#2B7A78"]}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headersearch-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span
                  onClick={() => setopenOptions(!openoptions)}
                  className="header-text"
                >
                  {" "}
                  {`${options.adult} Adult-${options.children} Children-${options.room} Room`}
                </span>
                {openoptions && (
                  <div className="options">
                    <div className="option-items">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          disabled={options.adult <= 1}
                          className="option-counter-button"
                          onClick={() => handleOptions("adult", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOptions("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-items">
                      <span className="option-text">Childrens</span>
                      <div className="option-counter">
                        <button
                          disabled={options.children <= 0}
                          className="option-counter-button"
                          onClick={() => handleOptions("children", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.children}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOptions("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-items">
                      <span className="option-text">Rooms</span>
                      <div className="option-counter">
                        <button
                          disabled={options.room <= 1}
                          className="option-counter-button"
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.room}
                        </span>
                        <button
                          className="option-counter-button"
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headersearch-item">
                <button
                  className="header-button search-button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
