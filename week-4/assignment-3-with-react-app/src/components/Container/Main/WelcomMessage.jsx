import React from "react";

const WelcomMessage = (props) => {
  const { ToggleText, sayHi } = props;
  return (
    <section className="welcome-message">
      <h1 onClick={() => ToggleText()}>
        {sayHi ? "Have a Good Time!" : "Welcome Message"}
      </h1>
    </section>
  );
};

export default WelcomMessage;
