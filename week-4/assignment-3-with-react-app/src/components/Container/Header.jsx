import React from "react";
import menuIcon from "../../assets/menu-icon.svg";
import { Consumer } from "../Context";

const Header = () => {
  return (
    <Consumer>
      {({ ToggleFloatingMenu }) => {
        return (
          <header>
            <nav className="heading">
              <p>Welcome Title/Logo</p>
              <ul className="nav-items">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
              <img
                src={menuIcon}
                alt="menu icon"
                onClick={() => ToggleFloatingMenu()}
              />
            </nav>
          </header>
        );
      }}
    </Consumer>
  );
};

export default Header;
