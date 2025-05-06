import "./PriorityDropDown.css";
function PriorityDropDown({ setPriority }) {
  return (
    <div className="priority-dropdown-container" onClick={(e) => e.stopPropagation()}>
      {/* 🟡 Each div now calls setPriority with correct value */}
      <div
        className="priority-drop-down-item-container"
        onClick={() => setPriority("None")}
      >
        <div className="none-item-text">None</div>
      </div>
      <div
        className="priority-drop-down-item2-container"
        onClick={() => setPriority("Low")}
      >
        <svg
          className="priority-drop-down-item2-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M10.3008 4.96094L6.80078 8.46094L3.30078 4.96094"
            stroke="#0EA5E9"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLineJoin="round"
          />
        </svg>
        <div className="low-item-text">Low</div>
      </div>
      <div
        className="priority-drop-down-item3-container"
        onClick={() => setPriority("Medium")}
        role="button" // ✅ Improves screen reader accessibility
      >
        <svg
          className="priority-drop-down-item3-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M2.80078 4.46094H10.8008M2.80078 8.46094H10.8008"
            stroke="#F97316"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="medium-item-text">Medium</div>
      </div>
      <div
        className="priority-drop-down-item4-container"
        onClick={() => setPriority("High")}
      >
        <svg
          className="priority-drop-down-item4-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M3.30078 5.96094L6.80078 2.46094L10.3008 5.96094M3.30078 9.96094L6.80078 6.46094L10.3008 9.96094"
            stroke="#EF4444"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="high-item-text">High</div>
      </div>
      <div
        className="priority-drop-down-item5-container"
        onClick={() => setPriority("SOS")}
      >
        <div className="priority-drop-down-item5-svg-container">
          <svg
            className="priority-drop-down-item5-sos-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M6.80078 11.8359C3.83578 11.8359 1.42578 9.42594 1.42578 6.46094C1.42578 3.49594 3.83578 1.08594 6.80078 1.08594C9.76578 1.08594 12.1758 3.49594 12.1758 6.46094C12.1758 9.42594 9.76578 11.8359 6.80078 11.8359ZM6.80078 1.83594C4.25078 1.83594 2.17578 3.91094 2.17578 6.46094C2.17578 9.01094 4.25078 11.0859 6.80078 11.0859C9.35078 11.0859 11.4258 9.01094 11.4258 6.46094C11.4258 3.91094 9.35078 1.83594 6.80078 1.83594Z"
              fill="#B91C1C"
            />
            <path
              d="M6.80078 7.33594C6.59578 7.33594 6.42578 7.16594 6.42578 6.96094V4.46094C6.42578 4.25594 6.59578 4.08594 6.80078 4.08594C7.00578 4.08594 7.17578 4.25594 7.17578 4.46094V6.96094C7.17578 7.16594 7.00578 7.33594 6.80078 7.33594Z"
              fill="#B91C1C"
            />
            <path
              d="M6.80078 8.96039C6.73578 8.96039 6.67078 8.94539 6.61078 8.92039C6.55078 8.89539 6.49578 8.86039 6.44578 8.81539C6.40078 8.76539 6.36578 8.71539 6.34078 8.65039C6.31578 8.59039 6.30078 8.52539 6.30078 8.46039C6.30078 8.39539 6.31578 8.33039 6.34078 8.27039C6.36578 8.21039 6.40078 8.15539 6.44578 8.10539C6.49578 8.06039 6.55078 8.02539 6.61078 8.00039C6.73078 7.95039 6.87078 7.95039 6.99078 8.00039C7.05078 8.02539 7.10578 8.06039 7.15578 8.10539C7.20078 8.15539 7.23578 8.21039 7.26078 8.27039C7.28578 8.33039 7.30078 8.39539 7.30078 8.46039C7.30078 8.52539 7.28578 8.59039 7.26078 8.65039C7.23578 8.71539 7.20078 8.76539 7.15578 8.81539C7.10578 8.86039 7.05078 8.89539 6.99078 8.92039C6.93078 8.94539 6.86578 8.96039 6.80078 8.96039Z"
              fill="#B91C1C"
            />
          </svg>
        </div>

        <div className="sos-item-text">SOS</div>
      </div>
    </div>
  );
}
export default PriorityDropDown;
