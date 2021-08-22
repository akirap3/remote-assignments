import React from "react";
import crossIcon from "../assets/crossIcon.svg";
import { Consumer } from "./Context";

class FloatingMenu extends React.Component {
  render() {
    return (
      <Consumer>
        {({ isfloatingMenu, ToggleFloatingMenu }) => {
          return (
            <div
              id="floating-menu"
              style={{ width: isfloatingMenu ? "50vw" : "0" }}
            >
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
        }}
      </Consumer>
    );
  }
}

export default FloatingMenu;
