import React from "react";
import Header from "./Header";
import Main from "./Main/Main";

const Container = (props) => {
  const { sayHi, toggle, handleToggle, ToggleText } = props;

  return (
    <div>
      <Header />
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
