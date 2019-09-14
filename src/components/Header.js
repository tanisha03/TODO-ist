import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export function Header() {
  return (
    <div>
      <p>TODO-ist</p>
      <nav>
        <div className="logo">
          <img
            src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-12-26/17403075280_024490441c688e6ab5f8_512.png"
            alt="Todoist"
          />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
