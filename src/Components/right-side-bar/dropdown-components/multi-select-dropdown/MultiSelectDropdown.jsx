import React, { useState, useEffect, useRef } from "react";
import "./MultiSelectDropdown.css";

const MultiSelectDropdown = ({ title, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null); // Step 1: Create a ref

  const toggleDropdown = () => setIsOpen(!isOpen);
  console.log(isOpen, "isOpen");

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="multi-select-dropdown " ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <div className="title-text">{title}</div>

        <span className="multi-select-icon-container">
          {isOpen ? (
            <svg
              className="carrot-up-down-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.0589 5.25188C12.0589 5.36271 12.018 5.47354 11.9305 5.56104L8.12719 9.36438C7.50885 9.98271 6.49385 9.98271 5.87552 9.36438L2.07219 5.56104C1.90302 5.39188 1.90302 5.11188 2.07219 4.94271C2.24135 4.77354 2.52135 4.77354 2.69052 4.94271L6.49385 8.74604C6.77385 9.02604 7.22885 9.02604 7.50885 8.74604L11.3122 4.94271C11.4814 4.77354 11.7614 4.77354 11.9305 4.94271C12.0122 5.03021 12.0589 5.14104 12.0589 5.25188Z"
                fill="#8496A7"
              />
            </svg>
          ) : (
            <svg
              className="carrot-up-down-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M2.21901 10.4995C2.21901 10.3729 2.26568 10.2462 2.36568 10.1462L6.71234 5.79953C7.41901 5.09286 8.57901 5.09286 9.28568 5.79953L13.6323 10.1462C13.8257 10.3395 13.8257 10.6595 13.6323 10.8529C13.439 11.0462 13.119 11.0462 12.9257 10.8529L8.57901 6.5062C8.25901 6.1862 7.73901 6.1862 7.41901 6.5062L3.07234 10.8529C2.87901 11.0462 2.55901 11.0462 2.36568 10.8529C2.27234 10.7529 2.21901 10.6262 2.21901 10.4995Z"
                fill="#8496A7"
              />
            </svg>
          )}
        </span>

        {isOpen && (
          <div className="dropdown-list">
            {options.map((option, index) => (
              <label
                key={index}
                className="dropdown-item"
                style={{ color: option.color }}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.label)}
                  onChange={() => handleCheckboxChange(option.label)}
                />
                <span className="dropdown-icon-label">
                  {option.icon}
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default MultiSelectDropdown;
