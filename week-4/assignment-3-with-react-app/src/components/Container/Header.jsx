import React from "react";

const Header = (props) => {
  const { ToggleFloatingMenu } = props;
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
          src="image/menu-icon.svg"
          alt="menu icon"
          onClick={() => ToggleFloatingMenu()}
        />
      </nav>
    </header>
  );
};

export default Header;
