import "./AssigneesDropdown.css";
import InviteGuest from "../invite-guest/InviteGuest";
import { useState,useEffect } from "react";
function AssigneesDropdown({ onClose }) {
  const handleItemClick = () => {
    if (onClose) onClose();
  };

  const [showInviteGuest, setShowInviteGuest] = useState(false);

  const handleOpen = () => setShowInviteGuest(true);
  const handleClose = () => {
    setShowInviteGuest(false);
    console.log("close clicked in invite guest",showInviteGuest);
  };

  
  // Debug change in state
useEffect(() => {
  console.log("showInviteGuest changed:", showInviteGuest);
}, [showInviteGuest]);
  return (
    <div className="assignees-dropdown-container">
      <div className="assignees-dropdown-navbar-search-field">
        <svg
          className="assignees-dropdown-navbar-search-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
            fill="#C7D5DA"
          />
        </svg>
        <div className="assignees-dropdown-search-text">Search</div>
      </div>
      <div
        className="assignees-dropdown-select-menu-item1-container"
        onClick={handleItemClick}
      >
        <svg
          className="assignees-dropdown-select-menu-item1-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            fill="#516CE0"
          />
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke="#516CE0"
          />
          <path
            d="M12.2074 4.79279C12.3949 4.98031 12.5002 5.23462 12.5002 5.49979C12.5002 5.76495 12.3949 6.01926 12.2074 6.20679L7.20741 11.2068C7.01988 11.3943 6.76557 11.4996 6.50041 11.4996C6.23524 11.4996 5.98094 11.3943 5.79341 11.2068L3.79341 9.20679C3.61125 9.01818 3.51045 8.76558 3.51273 8.50339C3.51501 8.24119 3.62018 7.99038 3.80559 7.80497C3.991 7.61956 4.24181 7.51439 4.50401 7.51211C4.7662 7.50983 5.0188 7.61063 5.20741 7.79279L6.50041 9.08579L10.7934 4.79279C10.9809 4.60532 11.2352 4.5 11.5004 4.5C11.7656 4.5 12.0199 4.60532 12.2074 4.79279Z"
            fill="white"
          />
        </svg>
        <div className="assignees-dropdown-select-menu-item1-text">Naresh</div>

        <div className="assignees-dropdown-select-menu-item1-invite-text">
          Invite Sent
        </div>
      </div>
      <div
        className="assignees-dropdown-select-menu-item1-container"
        onClick={handleItemClick}
      >
        <svg
          className="assignees-dropdown-select-menu-item1-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            fill="#516CE0"
          />
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3.5"
            stroke="#516CE0"
          />
          <path
            d="M12.2074 4.79279C12.3949 4.98031 12.5002 5.23462 12.5002 5.49979C12.5002 5.76495 12.3949 6.01926 12.2074 6.20679L7.20741 11.2068C7.01988 11.3943 6.76557 11.4996 6.50041 11.4996C6.23524 11.4996 5.98094 11.3943 5.79341 11.2068L3.79341 9.20679C3.61125 9.01818 3.51045 8.76558 3.51273 8.50339C3.51501 8.24119 3.62018 7.99038 3.80559 7.80497C3.991 7.61956 4.24181 7.51439 4.50401 7.51211C4.7662 7.50983 5.0188 7.61063 5.20741 7.79279L6.50041 9.08579L10.7934 4.79279C10.9809 4.60532 11.2352 4.5 11.5004 4.5C11.7656 4.5 12.0199 4.60532 12.2074 4.79279Z"
            fill="white"
          />
        </svg>
        <div className="assignees-dropdown-select-menu-item1-text">Prasad</div>
      </div>
      <div
        className="assignees-dropdown-invite-guest-container"
        onClick={handleOpen}
      >
        <div className="assignees-dropdown-invite-guest-content">
          <svg
            className="assignees-dropdown-invite-guest-add-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z"
              fill="#3246D2"
            />
            <path
              d="M8 13C7.72667 13 7.5 12.7733 7.5 12.5V4.5C7.5 4.22667 7.72667 4 8 4C8.27333 4 8.5 4.22667 8.5 4.5V12.5C8.5 12.7733 8.27333 13 8 13Z"
              fill="#3246D2"
            />
          </svg>
          <div className="assignees-dropdown-invite-guest-text">
            Invite a Guest
          </div>
        </div>
      </div>
        {showInviteGuest && (
          <div className="overlay">
            <InviteGuest onClose={handleClose} />
          </div>
        )}

      <div className="assignees-dropdown-select-menu-item1"></div>
    </div>
  );
}
export default AssigneesDropdown;
