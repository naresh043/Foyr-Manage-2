import "./InviteGuest.css";
function InviteGuest({ onClose }) {
  return (
    <div className="invite-guest-container">
      <div className="invite-guest-top-container">
        <div className="invite-guest-container-invite-guest-text">
          Invite a Guest
        </div>
        <svg
          onClick={onClose}
          className="invite-guest-close-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5 15.5L15 5.5M5 5.5L15 15.5"
            stroke="#6B7280"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="invite-guest-bottom-container">
        <div className="invite-guest-bottom-container-label1">
          <label className="invite-guest-bottom-container-label1-text">
            Username
          </label>
          <input
            className="invite-guest-bottom-container-label1-input"
            placeholder="Enter the username"
            type="text"
          />
        </div>
        <div className="invite-guest-bottom-container-label2">
          <label
            htmlFor=""
            className="invite-guest-bottom-container-label2-text"
          >
            Email/WhatsApp no
          </label>
          <input
            className="invite-guest-bottom-container-label2-input"
            type="text"
            placeholder="Enter Work Email or WhatsApp number"
          />
        </div>
        <div className="invite-guest-bottom-container-send-invite-button">
          <div className="sent-invite-button">Sent invite</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default InviteGuest;
