import React, { useContext } from "react";
import crossIcon from "../assets/crossIcon.svg";
import { MYCONTEXT } from "./Context";

const FloatingMenu = () => {
  const { isfloatingMenu, ToggleFloatingMenu } = useContext(MYCONTEXT);

  return (
    <div id="floating-menu" style={{ width: isfloatingMenu ? "50vw" : "0" }}>
      <div id="menuDiv">
        <img
          id="menu-exit"
          src={crossIcon}
          alt="menu exit"
          onClick={() => ToggleFloatingMenu()}
        />
        <ul id="menuUl">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
