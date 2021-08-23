import React, { useContext } from "react";
import menuIcon from "../../assets/menu-icon.svg";
import { MYCONTEXT } from "../Context";

const Header = () => {
  const { ToggleFloatingMenu } = useContext(MYCONTEXT);
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
};

export default Header;
