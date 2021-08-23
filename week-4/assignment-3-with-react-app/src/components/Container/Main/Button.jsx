import React, { useContext } from "react";
import { MYCONTEXT } from "../../Context";

const Button = () => {
  const { toggle, handleToggle } = useContext(MYCONTEXT);
  return (
    <button className="call-to-action" onClick={() => handleToggle()}>
      {toggle ? "Show Content" : "Call to Action"}
    </button>
  );
};

export default Button;
