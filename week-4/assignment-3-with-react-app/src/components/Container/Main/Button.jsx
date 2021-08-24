import React, { useContext } from "react";
import { MyContext } from "../../Context";

const Button = () => {
  const { toggle, handleToggle } = useContext(MyContext);
  return (
    <button className="call-to-action" onClick={() => handleToggle()}>
      {toggle ? "Show Content" : "Call to Action"}
    </button>
  );
};

export default Button;
