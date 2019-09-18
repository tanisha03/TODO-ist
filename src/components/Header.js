import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export function Header() {
  return (
    <header className="header">
      {/* <h1>TODO-ist</h1> */}
      <nav>
        <div className="logo">
        <span style={{color:'#ffffff',fontSize:'30px', marginRight:'20px', paddingBottom:'20px'}}> TODO-ist</span>
          <img
            src="https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-12-26/17403075280_024490441c688e6ab5f8_512.png"
            alt="Todoist"
            height="30"
            width="35"
          />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">+</li>
            <li className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
