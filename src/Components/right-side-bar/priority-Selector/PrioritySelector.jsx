// PrioritySelector.js
import { useState, useRef, useEffect } from "react";
import PriorityDropDown from "../priority-dropdown/PriorityDropDown";
import "../RightSideBar.css";

function PrioritySelector() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [priority, setPriority] = useState("High"); // ✅ Default value set
  const containerRef = useRef(null);

  // ✅ Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // ✅ Cleanup to avoid memory leaks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Called by dropdown to update priority and close it
  const handlePrioritySelect = (value) => {
    setPriority(value);  // Update the selected priority
    setShowDropdown(false); // Close the dropdown
  };
  return (
    <>
      <div
        ref={containerRef}
        style={{ position: "relative" }}
        className="column3-table-cell2"
        onClick={() => setShowDropdown((prev) => !prev)} // ✅ Toggle dropdown visibility
      >
        <svg
          className="table-cell2-high-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 5.5L6 2L9.5 5.5M2.5 9.5L6 6L9.5 9.5"
            stroke="#EF4444"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* ✅ Show selected priority text */}
        <span className="cell2-high-text">{priority}</span>
        {/* ✅ Conditionally render dropdown */}
        {showDropdown && (
          <PriorityDropDown setPriority={handlePrioritySelect} />
        )}
      </div>
    </>
  );
}

export default PrioritySelector;
