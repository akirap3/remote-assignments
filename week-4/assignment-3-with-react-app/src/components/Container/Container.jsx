import React from "react";
import Header from "./Header";
import Main from "./Main/Main";

const Container = (props) => {
  const { ToggleFloatingMenu, sayHi, toggle, handleToggle, ToggleText } = props;

  return (
    <div>
      <Header ToggleFloatingMenu={ToggleFloatingMenu} />
      <Main
        sayHi={sayHi}
        toggle={toggle}
        handleToggle={handleToggle}
        ToggleText={ToggleText}
      />
    </div>
  );
};

export default Container;
