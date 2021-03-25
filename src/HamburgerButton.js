import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const HamburgerButton = ({ showSidebar, setSidebarVisible, setSidebarHidden }) => {

  return showSidebar ? (
    <FontAwesomeIcon
      onClick={() => setSidebarHidden()}
      className="hamburger-btn"
      icon={faTimesCircle}
    />
  ) : (
    <FontAwesomeIcon
      onClick={() => setSidebarVisible()}
      className="hamburger-btn"
      icon={faBars}
    />
  );
};

export default HamburgerButton;
