import React from "react";
import {
  FaInbox,
  FaChevronDown,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar_generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className="sidebar_middle">
        <span>
          <FaChevronDown />
        </span>
        <span>Projects</span>
      </div>
      <ul className="sidebar_projects">Projects will be here</ul>
      Add Project
    </div>
  );
}
