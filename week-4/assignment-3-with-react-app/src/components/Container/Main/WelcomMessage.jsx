import React, { useContext } from "react";
import { MYCONTEXT } from "../../Context";

const WelcomMessage = () => {
  const { sayHi, ToggleText } = useContext(MYCONTEXT);
  return (
    <section className="welcome-message">
      <h1 onClick={() => ToggleText()}>
        {sayHi ? "Have a Good Time!" : "Welcome Message"}
      </h1>
    </section>
  );
};

export default WelcomMessage;
