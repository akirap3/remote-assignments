import React from "react";
import { Consumer } from "../../Context";

const Button = () => {
  return (
    <Consumer>
      {({ toggle, handleToggle }) => {
        return (
          <button className="call-to-action" onClick={() => handleToggle()}>
            {toggle ? "Show Content" : "Call to Action"}
          </button>
        );
      }}
    </Consumer>
  );
};

export default Button;
