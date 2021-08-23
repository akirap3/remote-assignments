import React, { useState } from "react";

export const MYCONTEXT = React.createContext();

export const Provider = (props) => {
  const [isfloatingMenu, setIsFloatingMenu] = useState(false);
  const [sayHi, setSayHi] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const ToggleFloatingMenu = () => {
    setIsFloatingMenu((prevState) => !prevState);
  };

  const ToggleText = () => {
    setSayHi((prevState) => !prevState);
  };

  return (
    <MYCONTEXT.Provider
      value={{
        isfloatingMenu: isfloatingMenu,
        sayHi: sayHi,
        toggle: toggle,
        handleToggle: handleToggle,
        ToggleFloatingMenu: ToggleFloatingMenu,
        ToggleText: ToggleText,
      }}
    >
      {props.children}
    </MYCONTEXT.Provider>
  );
};
