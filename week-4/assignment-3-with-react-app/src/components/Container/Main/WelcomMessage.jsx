import React, { useContext } from "react";
import { MyContext } from "../../Context";

const WelcomMessage = () => {
  const { sayHi, ToggleText } = useContext(MyContext);
  return (
    <section className="welcome-message">
      <h1 onClick={() => ToggleText()}>
        {sayHi ? "Have a Good Time!" : "Welcome Message"}
      </h1>
    </section>
  );
};

export default WelcomMessage;
