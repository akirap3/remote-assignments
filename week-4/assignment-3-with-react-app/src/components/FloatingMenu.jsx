import React from "react";

class FloatingMenu extends React.Component {
  render() {
    const { isfloatingMenu, ToggleFloatingMenu } = this.props;
    return (
      <div id="floating-menu" style={{ width: isfloatingMenu ? "50vw" : "0" }}>
        <div id="menuDiv">
          <img
            id="menu-exit"
            src="image/crossIcon.svg"
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
  }
}

export default FloatingMenu;
