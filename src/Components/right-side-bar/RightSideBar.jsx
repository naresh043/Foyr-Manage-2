import "./RightSideBar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelectDropdown from "./multi-select-dropdown/MultiSelectDropdown";
import PrioritySelector from "./priority-Selector/PrioritySelector";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  CaretDown,
  CaretDoubleUp,
  Equals,
  WarningOctagon,
} from "phosphor-react";
import React from "react";
function RightSideBar() {
  // const tasks = useSelector((state) => state.user.data);
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  // const datePickerRef = useRef(null);

  const tasks = useSelector((state) => state.user.data); // Make sure state is correct
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State to track selected date
  const datePickerRef = useRef(null);
  const columnRef = useRef(null); // Ref to the container div where datepicker is triggered
  console.log(datePickerRef, "datePickerRef");
  console.log(columnRef, "columnRef");

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       datePickerRef.current &&
  //       !datePickerRef.current.contains(event.target)
  //     ) {
  //       setIsDatePickerOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // Handle click outside of the DatePicker to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target) &&
        !columnRef.current.contains(event.target)
      ) {
        setIsDatePickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(tasks);
  const dispatch = useDispatch();

  const statusOptions = [
    { label: "To-Do" },
    { label: "In-Progress" },
    { label: "Done" },
    { label: "Blocked" },
  ];

  const taskTypeOptions = [
    { label: "Task" },
    { label: "Milestone" },
    { label: "Issue" },
  ];

  const priorityOptions = [
    { label: "Low", icon: <CaretDown size={16} />, color: "green" },
    { label: "Medium", icon: <Equals size={16} />, color: "orange" },
    { label: "High", icon: <CaretDoubleUp size={16} />, color: "red" },
    { label: "SOS", icon: <WarningOctagon size={16} />, color: "lighgtred" },
  ];

  return (
    <>
      <div className="tasks-section-container">
        <div className="right-side-bar-container">
          <div className="nav-routers-container">
            <div className="right-side-bar-arrow-left">
              <svg
                className="nav-routes-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.38094 12.5448C6.25427 12.5448 6.1276 12.4981 6.0276 12.3981L1.98094 8.35146C1.7876 8.15812 1.7876 7.83812 1.98094 7.64479L6.0276 3.59812C6.22094 3.40479 6.54094 3.40479 6.73427 3.59812C6.9276 3.79146 6.9276 4.11146 6.73427 4.30479L3.04094 7.99812L6.73427 11.6915C6.9276 11.8848 6.9276 12.2048 6.73427 12.3981C6.64094 12.4981 6.5076 12.5448 6.38094 12.5448Z"
                  fill="#292D32"
                />
                <path
                  d="M13.6653 8.5H2.44531C2.17198 8.5 1.94531 8.27333 1.94531 8C1.94531 7.72667 2.17198 7.5 2.44531 7.5H13.6653C13.9386 7.5 14.1653 7.72667 14.1653 8C14.1653 8.27333 13.9386 8.5 13.6653 8.5Z"
                  fill="#292D32"
                />
              </svg>
            </div>
            <div className="right-side-bar-project-text">Projects</div>
            <div className="right-side-bar-arrow-left2">
              <svg
                className="nav-routes-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.00047 2.21901C6.12714 2.21901 6.2538 2.26568 6.3538 2.36568L10.7005 6.71234C11.4071 7.41901 11.4071 8.57901 10.7005 9.28568L6.3538 13.6323C6.16047 13.8257 5.84047 13.8257 5.64714 13.6323C5.4538 13.439 5.4538 13.119 5.64714 12.9257L9.9938 8.57901C10.3138 8.25901 10.3138 7.73901 9.9938 7.41901L5.64714 3.07234C5.4538 2.87901 5.4538 2.55901 5.64714 2.36568C5.74714 2.27234 5.8738 2.21901 6.00047 2.21901Z"
                  fill="#8496A7"
                />
              </svg>
            </div>
            <div className="right-side-kitchen-renovation-text">
              Kitchen Renovation
            </div>
          </div>
          <div className="right-side-bar-header">
            <div className="rightside-bar-left-container">
              <div className="rightside-summary-container">
                <div className="summary-content-wrapper">
                  <div className="summary-text">Summary</div>
                </div>
                <div className="bottom-border"></div>
              </div>
              <div className="rightside-summary-container">
                <div className="summary-content-wrapper">
                  <div className="task-text">Tasks</div>
                </div>
                <div className="bottom-border-tasks"></div>
              </div>

              <div className="rightside-summary-container">
                <div className="summary-content-wrapper">
                  <div className="summary-text">Documents</div>
                </div>
                <div className="bottom-border"></div>
              </div>
            </div>
            <div className="rightside-bar-right-container">
              <div className="notification-icon-container">
                <div className="notification-icon-wrapper">
                  <svg
                    className="notification-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.01455 13.6853C6.46122 13.6853 4.90788 13.4386 3.43455 12.9453C2.87455 12.752 2.44788 12.3586 2.26121 11.8453C2.06788 11.332 2.13455 10.7653 2.44121 10.2586L3.20788 8.98531C3.36788 8.71865 3.51455 8.18531 3.51455 7.87198V5.94531C3.51455 3.46531 5.53455 1.44531 8.01455 1.44531C10.4945 1.44531 12.5145 3.46531 12.5145 5.94531V7.87198C12.5145 8.17865 12.6612 8.71865 12.8212 8.99198L13.5812 10.2586C13.8679 10.7386 13.9212 11.3186 13.7279 11.8453C13.5345 12.372 13.1145 12.772 12.5879 12.9453C11.1212 13.4386 9.56788 13.6853 8.01455 13.6853ZM8.01455 2.44531C6.08788 2.44531 4.51455 4.01198 4.51455 5.94531V7.87198C4.51455 8.35865 4.31455 9.07865 4.06788 9.49865L3.30121 10.772C3.15455 11.0186 3.11455 11.2786 3.20121 11.4986C3.28121 11.7253 3.48121 11.8986 3.75455 11.992C6.54121 12.9253 9.49455 12.9253 12.2812 11.992C12.5212 11.912 12.7079 11.732 12.7945 11.492C12.8812 11.252 12.8612 10.992 12.7279 10.772L11.9612 9.49865C11.7079 9.06531 11.5145 8.35198 11.5145 7.86531V5.94531C11.5145 4.01198 9.94788 2.44531 8.01455 2.44531Z"
                      fill="#9CA3AF"
                    />
                    <path
                      d="M9.25504 2.62516C9.20837 2.62516 9.1617 2.61849 9.11504 2.60516C8.9217 2.55182 8.73504 2.51182 8.55504 2.48516C7.98837 2.41182 7.4417 2.45182 6.92837 2.60516C6.7417 2.66516 6.5417 2.60516 6.41504 2.46516C6.28837 2.32516 6.24837 2.12516 6.3217 1.94516C6.59504 1.24516 7.2617 0.785156 8.0217 0.785156C8.7817 0.785156 9.44837 1.23849 9.7217 1.94516C9.78837 2.12516 9.75504 2.32516 9.62837 2.46516C9.52837 2.57182 9.38837 2.62516 9.25504 2.62516Z"
                      fill="#9CA3AF"
                    />
                    <path
                      d="M8.01172 15.207C7.35172 15.207 6.71172 14.9404 6.24505 14.4737C5.77839 14.007 5.51172 13.367 5.51172 12.707H6.51172C6.51172 13.1004 6.67172 13.487 6.95172 13.767C7.23172 14.047 7.61839 14.207 8.01172 14.207C8.83839 14.207 9.51172 13.5337 9.51172 12.707H10.5117C10.5117 14.087 9.39172 15.207 8.01172 15.207Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </div>
                {/* <div >
                <svg
                className="ellipse"
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle
                    cx="3.5"
                    cy="3.5"
                    r="3"
                    fill="#3B82F6"
                    stroke="white"
                  />
                </svg>
              </div> */}
              </div>
              <div className="use-template-container">
                <div className="use-template-text">Use Template</div>
              </div>
              <div className="add-task-container">
                <div className="add-task-text">Add Task</div>
              </div>
            </div>
          </div>
          <div className="table-view-container">
            <div className="table-view-header">
              <div className="filter-container">
                <div className="filter-icon-wrapper">
                  <svg
                    className="filter-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.29229 15.0984C6.97229 15.0984 6.65896 15.0184 6.36563 14.8584C5.77896 14.5318 5.42563 13.9384 5.42563 13.2718V9.73844C5.42563 9.4051 5.20563 8.9051 4.99896 8.65177L2.50562 6.01177C2.08562 5.59177 1.76562 4.87177 1.76562 4.33177V2.79844C1.76562 1.73177 2.57229 0.898438 3.59896 0.898438H12.399C13.4123 0.898438 14.2323 1.71844 14.2323 2.73177V4.19844C14.2323 4.89844 13.8123 5.69177 13.419 6.0851L10.5323 8.63844C10.2523 8.87177 10.0323 9.3851 10.0323 9.79844V12.6651C10.0323 13.2584 9.65896 13.9451 9.19229 14.2251L8.27229 14.8184C7.97229 15.0051 7.63229 15.0984 7.29229 15.0984ZM3.59896 1.89844C3.13229 1.89844 2.76562 2.29177 2.76562 2.79844V4.33177C2.76562 4.57844 2.96562 5.05844 3.21896 5.31177L5.75896 7.9851C6.09896 8.4051 6.43229 9.1051 6.43229 9.73177V13.2651C6.43229 13.6984 6.73229 13.9118 6.85896 13.9784C7.13896 14.1318 7.47896 14.1318 7.73896 13.9718L8.66563 13.3784C8.85229 13.2651 9.03896 12.9051 9.03896 12.6651V9.79844C9.03896 9.0851 9.38563 8.29844 9.88563 7.87844L12.739 5.35177C12.9656 5.1251 13.239 4.5851 13.239 4.19177V2.73177C13.239 2.27177 12.8656 1.89844 12.4056 1.89844H3.59896Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M3.99848 7.16749C3.90515 7.16749 3.81848 7.14083 3.73182 7.09416C3.49848 6.94749 3.42515 6.63416 3.57182 6.40083L6.85848 1.13416C7.00515 0.900827 7.31182 0.827493 7.54515 0.97416C7.77848 1.12083 7.85182 1.42749 7.70515 1.66083L4.41848 6.92749C4.32515 7.08083 4.16515 7.16749 3.99848 7.16749Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
                <div className="filters-text">Filters</div>
              </div>
              <MultiSelectDropdown title="Status" options={statusOptions} />
              <MultiSelectDropdown title="Priority" options={priorityOptions} />
              <MultiSelectDropdown
                title="Assignees"
                options={taskTypeOptions}
              />
              <MultiSelectDropdown title="Created By" options={statusOptions} />
              <MultiSelectDropdown title="Due On" options={taskTypeOptions} />
              <div className="show-all-task-button-container">
                <div className="show-all-task-button-text">Show All Task</div>
              </div>
              <div className="table-view-header-icon-container">
                <div className="table-view-header-icon-wrapper">
                  <div className="table-header-icon">
                    <svg
                      className="table-header-task-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.9987 13.5H7.33203C7.0587 13.5 6.83203 13.2733 6.83203 13C6.83203 12.7267 7.0587 12.5 7.33203 12.5H13.9987C14.272 12.5 14.4987 12.7267 14.4987 13C14.4987 13.2733 14.272 13.5 13.9987 13.5Z"
                        fill="#3246D2"
                      />
                      <path
                        d="M13.9987 8.83203H7.33203C7.0587 8.83203 6.83203 8.60536 6.83203 8.33203C6.83203 8.0587 7.0587 7.83203 7.33203 7.83203H13.9987C14.272 7.83203 14.4987 8.0587 14.4987 8.33203C14.4987 8.60536 14.272 8.83203 13.9987 8.83203Z"
                        fill="#3246D2"
                      />
                      <path
                        d="M13.9987 4.16797H7.33203C7.0587 4.16797 6.83203 3.9413 6.83203 3.66797C6.83203 3.39464 7.0587 3.16797 7.33203 3.16797H13.9987C14.272 3.16797 14.4987 3.39464 14.4987 3.66797C14.4987 3.9413 14.272 4.16797 13.9987 4.16797Z"
                        fill="#3246D2"
                      />
                      <path
                        d="M2.665 4.83427C2.53833 4.83427 2.41167 4.7876 2.31167 4.6876L1.645 4.02094C1.45167 3.8276 1.45167 3.5076 1.645 3.31427C1.83833 3.12094 2.15833 3.12094 2.35167 3.31427L2.665 3.6276L4.31167 1.98094C4.505 1.7876 4.825 1.7876 5.01833 1.98094C5.21167 2.17427 5.21167 2.49427 5.01833 2.6876L3.01833 4.6876C2.91833 4.7876 2.79167 4.83427 2.665 4.83427Z"
                        fill="#3246D2"
                      />
                      <path
                        d="M2.665 9.49833C2.53833 9.49833 2.41167 9.45167 2.31167 9.35167L1.645 8.685C1.45167 8.49167 1.45167 8.17167 1.645 7.97833C1.83833 7.785 2.15833 7.785 2.35167 7.97833L2.665 8.29167L4.31167 6.645C4.505 6.45167 4.825 6.45167 5.01833 6.645C5.21167 6.83833 5.21167 7.15833 5.01833 7.35167L3.01833 9.35167C2.91833 9.45167 2.79167 9.49833 2.665 9.49833Z"
                        fill="#3246D2"
                      />
                      <path
                        d="M2.665 14.1663C2.53833 14.1663 2.41167 14.1196 2.31167 14.0196L1.645 13.353C1.45167 13.1596 1.45167 12.8396 1.645 12.6463C1.83833 12.453 2.15833 12.453 2.35167 12.6463L2.665 12.9596L4.31167 11.313C4.505 11.1196 4.825 11.1196 5.01833 11.313C5.21167 11.5063 5.21167 11.8263 5.01833 12.0196L3.01833 14.0196C2.91833 14.1196 2.79167 14.1663 2.665 14.1663Z"
                        fill="#3246D2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="table-view-header-icon-wrapper-horizontal-icon">
                  <div className="table-header-icon">
                    <svg
                      className="table-header-fatrows-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.2654 15.1667H2.73203C1.45203 15.1667 0.832031 14.5133 0.832031 13.18V10.4867C0.832031 9.14667 1.45203 8.5 2.73203 8.5H13.2654C14.5454 8.5 15.1654 9.15333 15.1654 10.4867V13.18C15.1654 14.5133 14.5454 15.1667 13.2654 15.1667ZM2.73203 9.5C2.0587 9.5 1.83203 9.64 1.83203 10.4867V13.18C1.83203 14.0267 2.0587 14.1667 2.73203 14.1667H13.2654C13.9387 14.1667 14.1654 14.0267 14.1654 13.18V10.4867C14.1654 9.64 13.9387 9.5 13.2654 9.5H2.73203Z"
                        fill="#9CA3AF"
                      />
                      <path
                        d="M8.5987 7.4987H2.73203C1.45203 7.4987 0.832031 6.84536 0.832031 5.51203V2.8187C0.832031 1.4787 1.45203 0.832031 2.73203 0.832031H8.5987C9.8787 0.832031 10.4987 1.48536 10.4987 2.8187V5.51203C10.4987 6.84536 9.8787 7.4987 8.5987 7.4987ZM2.73203 1.83203C2.0587 1.83203 1.83203 1.97203 1.83203 2.8187V5.51203C1.83203 6.3587 2.0587 6.4987 2.73203 6.4987H8.5987C9.27203 6.4987 9.4987 6.3587 9.4987 5.51203V2.8187C9.4987 1.97203 9.27203 1.83203 8.5987 1.83203H2.73203Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                </div>

                <div className="table-view-header-icon-row-horizontal">
                  <svg
                    className="table-header-row-horizontal-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.51594 15.1693H2.8226C1.4826 15.1693 0.835938 14.5493 0.835938 13.2693V2.73594C0.835938 1.45594 1.48927 0.835938 2.8226 0.835938H3.51594C4.85594 0.835938 5.5026 1.45594 5.5026 2.73594V13.2693C5.5026 14.5493 4.84927 15.1693 3.51594 15.1693ZM2.8226 1.83594C1.97594 1.83594 1.83594 2.0626 1.83594 2.73594V13.2693C1.83594 13.9426 1.97594 14.1693 2.8226 14.1693H3.51594C4.3626 14.1693 4.5026 13.9426 4.5026 13.2693V2.73594C4.5026 2.0626 4.3626 1.83594 3.51594 1.83594H2.8226Z"
                      fill="#9CA3AF"
                    />
                    <path
                      d="M8.51594 15.1654H7.8226C6.4826 15.1654 5.83594 14.5454 5.83594 13.2654V2.73203C5.83594 1.45203 6.48927 0.832031 7.8226 0.832031H8.51594C9.85594 0.832031 10.5026 1.45203 10.5026 2.73203V13.2654C10.5026 14.5454 9.84927 15.1654 8.51594 15.1654ZM7.8226 1.83203C6.97594 1.83203 6.83594 2.0587 6.83594 2.73203V13.2654C6.83594 13.9387 6.97594 14.1654 7.8226 14.1654H8.51594C9.3626 14.1654 9.5026 13.9387 9.5026 13.2654V2.73203C9.5026 2.0587 9.3626 1.83203 8.51594 1.83203H7.8226Z"
                      fill="#9CA3AF"
                    />
                    <path
                      d="M13.5159 15.1654H12.8226C11.4826 15.1654 10.8359 14.5454 10.8359 13.2654V2.73203C10.8359 1.45203 11.4893 0.832031 12.8226 0.832031H13.5159C14.8559 0.832031 15.5026 1.45203 15.5026 2.73203V13.2654C15.5026 14.5454 14.8493 15.1654 13.5159 15.1654ZM12.8226 1.83203C11.9759 1.83203 11.8359 2.0587 11.8359 2.73203V13.2654C11.8359 13.9387 11.9759 14.1654 12.8226 14.1654H13.5159C14.3626 14.1654 14.5026 13.9387 14.5026 13.2654V2.73203C14.5026 2.0587 14.3626 1.83203 13.5159 1.83203H12.8226Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="table-desktop-container">
              <div className="table-column1">
                <div className="tables-cell1">
                  <input
                    className="form-field-checkbox"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <div className="table-heading-text">Tasks</div>
                </div>
                <div className="tables-divider"></div>
                {tasks.map((task, index) => (
                  <React.Fragment key={index}>
                    <div className="tables-cell2">
                      <input
                        className="form-field-checkbox"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <svg
                        className="table-task-cell4-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_6004_133036)">
                          <rect width="16" height="16" rx="8" fill="white" />
                          <path
                            d="M8 0C5.87827 -2.53014e-08 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 1.85488e-07 5.87827 0 8C-1.85488e-07 10.1217 0.842854 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16L8 8V0Z"
                            fill="#FDE68A"
                          />
                        </g>
                        <rect
                          x="0.5"
                          y="0.5"
                          width="15"
                          height="15"
                          rx="7.5"
                          stroke="#FBBF24"
                        />
                        <defs>
                          <clipPath id="clip0_6004_133036">
                            <rect width="16" height="16" rx="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="table-task-name">{task.title}</div>
                      <div className="task-completed-status-container">
                        <svg
                          className="task-completed-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM1.39926 7C1.39926 10.0932 3.9068 12.6007 7 12.6007C10.0932 12.6007 12.6007 10.0932 12.6007 7C12.6007 3.9068 10.0932 1.39926 7 1.39926C3.9068 1.39926 1.39926 3.9068 1.39926 7Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M7 0.699629C7 0.313234 7.31401 -0.00362238 7.69848 0.0349326C8.67089 0.132448 9.61482 0.432817 10.4682 0.919579C11.5248 1.52222 12.406 2.38976 13.0252 3.43671C13.6444 4.48366 13.98 5.67387 13.9991 6.89005C14.0146 7.87238 13.823 8.84426 13.44 9.74337C13.2886 10.0989 12.8597 10.2214 12.5211 10.0352C12.1825 9.84908 12.0634 9.4248 12.2059 9.06565C12.4768 8.38281 12.6117 7.65111 12.6001 6.91203C12.5848 5.93895 12.3162 4.98666 11.8208 4.14899C11.3254 3.31132 10.6203 2.61719 9.77494 2.13502C9.13286 1.76879 8.42673 1.53443 7.69782 1.4429C7.31444 1.39475 7 1.08602 7 0.699629Z"
                            fill="#374151"
                          />
                        </svg>
                        <div className="task-completed-status-text">
                          2/{task.subtasks.length}
                        </div>
                      </div>

                      {/* <svg
                  className="table-tasks-pin-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.58374 10.4114L1.8125 14.1827M7.79553 4.42845L6.75494 5.46904C6.67005 5.55392 6.62761 5.59636 6.57926 5.63008C6.53634 5.66002 6.49004 5.68479 6.44133 5.7039C6.38645 5.72543 6.32759 5.7372 6.20988 5.76074L3.7669 6.24934C3.13204 6.37631 2.8146 6.4398 2.66609 6.60717C2.53672 6.75297 2.47764 6.9481 2.5044 7.14119C2.53513 7.36282 2.76404 7.59173 3.22185 8.04954L7.94567 12.7734C8.40348 13.2312 8.63239 13.4601 8.85402 13.4908C9.04711 13.5176 9.24224 13.4585 9.38804 13.3291C9.55541 13.1806 9.6189 12.8632 9.74587 12.2283L10.2345 9.78533C10.258 9.66762 10.2698 9.60876 10.2913 9.55388C10.3104 9.50517 10.3352 9.45887 10.3651 9.41595C10.3988 9.3676 10.4413 9.32516 10.5262 9.24027L11.5668 8.19968C11.621 8.14541 11.6482 8.11828 11.678 8.09458C11.7045 8.07354 11.7326 8.05454 11.7619 8.03775C11.795 8.01886 11.8303 8.00374 11.9008 7.97351L13.5637 7.26083C14.0489 7.05292 14.2914 6.94896 14.4016 6.78097C14.498 6.63407 14.5324 6.45507 14.4975 6.28289C14.4576 6.08599 14.271 5.89938 13.8978 5.52617L10.469 2.09741C10.0958 1.72419 9.90922 1.53758 9.71232 1.49767C9.54014 1.46276 9.36114 1.49724 9.21424 1.59359C9.04625 1.70377 8.94229 1.94634 8.73438 2.43147L8.0217 4.09438C7.99147 4.16492 7.97635 4.2002 7.95746 4.23327C7.94067 4.26265 7.92167 4.29071 7.90063 4.31721C7.87693 4.34704 7.8498 4.37418 7.79553 4.42845Z"
                    stroke="#6B7280"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="table-tasks-notification-bing">
                  <svg
                    className="table-tasks-notification-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 7.01297C7.72667 7.01297 7.5 6.7863 7.5 6.51297V4.29297C7.5 4.01964 7.72667 3.79297 8 3.79297C8.27333 3.79297 8.5 4.01964 8.5 4.29297V6.51297C8.5 6.79297 8.27333 7.01297 8 7.01297Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M8.01259 13.5681C6.29259 13.5681 4.57926 13.2948 2.94593 12.7481C2.33926 12.5481 1.87926 12.1148 1.67926 11.5681C1.47926 11.0215 1.54593 10.3948 1.87259 9.84813L2.71926 8.43479C2.90593 8.12146 3.07259 7.53479 3.07259 7.16813V5.76813C3.07259 3.04146 5.28593 0.828125 8.01259 0.828125C10.7393 0.828125 12.9526 3.04146 12.9526 5.76813V7.16813C12.9526 7.52813 13.1193 8.12146 13.3059 8.43479L14.1526 9.84813C14.4659 10.3681 14.5193 10.9881 14.3126 11.5548C14.1059 12.1215 13.6526 12.5548 13.0793 12.7481C11.4459 13.3015 9.73259 13.5681 8.01259 13.5681ZM8.01259 1.83479C5.83926 1.83479 4.07259 3.60146 4.07259 5.77479V7.17479C4.07259 7.71479 3.85926 8.49479 3.57926 8.95479L2.73259 10.3748C2.55926 10.6615 2.51926 10.9681 2.61926 11.2348C2.71926 11.5015 2.94593 11.7015 3.26593 11.8081C6.33259 12.8281 9.70593 12.8281 12.7726 11.8081C13.0593 11.7148 13.2793 11.5015 13.3793 11.2215C13.4859 10.9415 13.4526 10.6348 13.2993 10.3748L12.4526 8.96146C12.1726 8.50146 11.9593 7.72146 11.9593 7.18146V5.78146C11.9526 3.60146 10.1859 1.83479 8.01259 1.83479Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M8.00125 15.2669C7.28792 15.2669 6.58792 14.9735 6.08125 14.4669C5.57458 13.9602 5.28125 13.2602 5.28125 12.5469H6.28125C6.28125 13.0002 6.46792 13.4402 6.78792 13.7602C7.10792 14.0802 7.54792 14.2669 8.00125 14.2669C8.94792 14.2669 9.72125 13.4935 9.72125 12.5469H10.7213C10.7213 14.0469 9.50125 15.2669 8.00125 15.2669Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
                <div className="table-task-paperclip-icon-container">
                  <svg
                  className="table-task-paperclip-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.21938 14.2249C7.49271 14.2249 6.76604 13.9516 6.21271 13.3983C5.10604 12.2916 5.10604 10.4983 6.21271 9.39161L7.86604 7.74495C8.05938 7.55161 8.37937 7.55161 8.57271 7.74495C8.76604 7.93828 8.76604 8.25828 8.57271 8.45162L6.91938 10.0983C6.20604 10.8116 6.20604 11.9783 6.91938 12.6916C7.63271 13.4049 8.79938 13.4049 9.51271 12.6916L12.106 10.0983C12.8927 9.31161 13.326 8.26495 13.326 7.15161C13.326 6.03828 12.8927 4.99161 12.106 4.20495C10.4794 2.57828 7.83938 2.57828 6.21271 4.20495L3.38604 7.03161C2.72604 7.69161 2.35938 8.57162 2.35938 9.50495C2.35938 10.4383 2.72604 11.3183 3.38604 11.9783C3.57938 12.1716 3.57938 12.4916 3.38604 12.6849C3.19271 12.8783 2.87271 12.8783 2.67938 12.6849C1.83271 11.8316 1.35938 10.7049 1.35938 9.50495C1.35938 8.30495 1.82604 7.17161 2.67938 6.32495L5.50604 3.49828C7.51938 1.48495 10.7994 1.48495 12.8127 3.49828C13.786 4.47161 14.326 5.77161 14.326 7.15161C14.326 8.53161 13.786 9.83161 12.8127 10.8049L10.2194 13.3983C9.66604 13.9516 8.94604 14.2249 8.21938 14.2249Z"
                      fill="#6B7280"
                    />
                  </svg>
                </div>
                <div className="paperclip-notification-icon-container">
                  <span className="paperclip-notification-text">1</span>
                </div> */}
                    </div>
                    {task.subtasks.length > 0 && (
                      <div className="table-cell3">
                        <div className="show-all-task-container">
                          <div className="show-all-task-text">
                            Show all {task.subtasks.length} subtasks
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="show-all-task-divider"></div>
                  </React.Fragment>
                ))}
                <div className="table-cell5">
                  <div className="new-task-container">
                    <div className="new-task-wrapper">
                      <svg
                        className="table-new-task-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                          fill="#6B7280"
                        />
                        <path
                          d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V4C7.5 3.72667 7.72667 3.5 8 3.5C8.27333 3.5 8.5 3.72667 8.5 4V12C8.5 12.2733 8.27333 12.5 8 12.5Z"
                          fill="#6B7280"
                        />
                      </svg>
                    </div>
                    <div className="add-new-tasks-text">New task</div>
                  </div>
                  <div></div>
                </div>
                <div className="show-all-task-divider"></div>
              </div>
              <div className="table-column2">
                <div className="column2-table-cell1">
                  <span className="due-date-text">DUE DATE</span>
                  <svg
                    className="table-column2-arrow-down-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="14.5"
                      height="14.5"
                      rx="2.25"
                      fill="#F1F4FD"
                    />
                    <rect
                      x="0.75"
                      y="0.75"
                      width="14.5"
                      height="14.5"
                      rx="2.25"
                      stroke="#DFE6FA"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M7.98828 12.4658C7.89106 12.4658 7.79385 12.43 7.7171 12.3532L4.61129 9.2474C4.4629 9.09902 4.4629 8.85342 4.61129 8.70504C4.75967 8.55665 5.00527 8.55665 5.15365 8.70504L7.98828 11.5397L10.8229 8.70504C10.9713 8.55665 11.2169 8.55665 11.3653 8.70504C11.5137 8.85342 11.5137 9.09902 11.3653 9.2474L8.25946 12.3532C8.18271 12.43 8.0855 12.4658 7.98828 12.4658Z"
                      fill="#7291E8"
                    />
                    <path
                      d="M7.98922 12.3788C7.77944 12.3788 7.60547 12.2049 7.60547 11.9951V3.38375C7.60547 3.17397 7.77944 3 7.98922 3C8.199 3 8.37297 3.17397 8.37297 3.38375V11.9951C8.37297 12.2049 8.199 12.3788 7.98922 12.3788Z"
                      fill="#7291E8"
                    />
                  </svg>
                </div>
                <div className="task-divider"></div>

                {/* <div
                  className="column2-table-cell2"
                  onClick={() => setIsDatePickerOpen(true)}
                >
                  <span className="table-cell2-text">Apr 16, 2025</span>

                  {isDatePickerOpen && (
                    <div
                      ref={datePickerRef}
                      className="calendar-popup-container"
                    >
                      <DatePicker
                        inline
                        selected={new Date("2025-04-16")} // optional: use dynamic state
                        onChange={(date) => {
                          console.log("Selected date:", date); // Optional: set date
                          setIsDatePickerOpen(false);
                        }}
                      />
                    </div>
                  )}
                </div> */}
                <div>
                  <div
                    className="column2-table-cell2"
                    ref={columnRef} // Reference to the column that triggers the date picker
                    onClick={() => setIsDatePickerOpen(true)}
                  >
                    <span className="table-cell2-text">
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Apr 16, 2025"}
                    </span>

                    {isDatePickerOpen && (
                      <div
                        ref={datePickerRef}
                        className="calendar-popup-container"
                        style={{
                          position: "absolute",
                          zIndex: 999,
                          top:
                            columnRef.current?.offsetTop +
                            columnRef.current?.offsetHeight +
                            10, // Position below the element
                          left: columnRef.current?.offsetLeft,
                          width: columnRef.current?.offsetWidth,
                        }}
                      >
                        <DatePicker
                          inline
                          selected={selectedDate} // Dynamically set the selected date
                          onChange={(date) => {
                            setSelectedDate(date); // Update the selected date state
                            setIsDatePickerOpen(false); // Close the DatePicker
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="column2-table-cell3"></div>
                <div className="task-divider"></div>
                {/* <div className="column2-table-cell4">
                  <span className="table-cell4-text">Tomorrow</span>
                </div> */}

                <div>
                  <div
                    className="column2-table-cell4"
                    ref={columnRef} // Reference to the column that triggers the date picker
                    onClick={() => setIsDatePickerOpen(true)}
                  >
                    <span className="table-cell4-text">
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Apr 01, 2025"}
                    </span>

                    {isDatePickerOpen && (
                      <div
                        ref={datePickerRef}
                        className="calendar-popup-container"
                        style={{
                          position: "absolute",
                          zIndex: 999,
                          top:
                            columnRef.current?.offsetTop +
                            columnRef.current?.offsetHeight +
                            10, // Position below the element
                          left: columnRef.current?.offsetLeft,
                          width: columnRef.current?.offsetWidth,
                        }}
                      >
                        <DatePicker
                          inline
                          selected={selectedDate} // Dynamically set the selected date
                          onChange={(date) => {
                            setSelectedDate(date); // Update the selected date state
                            setIsDatePickerOpen(false); // Close the DatePicker
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>



                <div className="task-divider"></div>
                <div className="column2-table-cell5"></div>
                <div className="task-divider"></div>
              </div>
              <div className="table-column3">
                <div className="column3-table-cell1">
                  <span className="priority-text">PRIORITY</span>
                </div>
                <div className="task-divider"></div>
                <PrioritySelector/>
                <div className="column2-table-cell3"></div>
                <div className="task-divider"></div>
                <PrioritySelector/>
                <div className="task-divider"></div>
                <div className="column3-table-cell5"></div>
                <div className="task-divider"></div>
              </div>
              <div className="table-column4">
                <div className="column4-table-cell1">
                  <span className="assignees-text">ASSIGNEES</span>
                </div>
                <div className="task-divider"></div>
                <div className="column4-table-cell2">
                  <div className="column4-table-avatar-container">
                    <div className="column4-table-avatar-wrapper1">
                      <span className="ms-text">
                        {tasks?.[0]?.assignee?.[0]?.name
                          ?.slice(0, 2)
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="column4-table-avatar-wrapper2">
                      <span className="pd-text">PD</span>
                    </div>
                  </div>
                </div>
                <div className="column4-table-cell3">
                  <div className="column4-table-avatar-container">
                    <div className="column4-table-avatar-wrapper1">
                      <span className="ms-text">MS</span>
                    </div>
                  </div>
                </div>
                <div className="task-divider"></div>
                <div className="column4-table-cell2">
                  <div className="column4-table-avatar-container">
                    <div className="column4-table-avatar-wrapper1">
                      <span className="ms-text">GD</span>
                    </div>
                  </div>
                </div>
                <div className="task-divider"></div>
                <div className="column3-table-cell5"></div>
                <div className="task-divider"></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RightSideBar;
