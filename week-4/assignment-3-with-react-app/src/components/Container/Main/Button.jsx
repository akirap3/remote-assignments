import React from "react";

const Button = (props) => {
  const { handleToggle } = props;
  return (
    <button className="call-to-action" onClick={() => handleToggle()}>
      {props.toggle ? "Show Content" : "Call to Action"}
    </button>
  );
};

export default Button;
