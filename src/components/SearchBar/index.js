import React from "react";

import "./style.css";

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-search"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const NotificationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-bell"
  >
    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" />
  </svg>
);

// Our SearchBar Component

export const SearchBar = props => {
  // Create a function that passes the searchstring to the function in app.js
  let sendSearchTerm = searchString => {
    // Use the function out of app.js and send it the value from our search input
    props.searchFunction(this.inputSearch.value);

  };

  return (
    <div className="search">
      <div className="search-bar">
        {SearchIcon}
        <input
          onChange={sendSearchTerm}
          type="text"
          placeholder={props.placeholder}
          /* Define the reference so we can acces the input.value */
          ref={inputSearch => (this.inputSearch = inputSearch)}
        />
      </div>
      <div className="notification">{NotificationIcon}</div>
    </div>
  );
};
