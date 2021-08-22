import React from "react";
import { Consumer } from "../../Context";

const WelcomMessage = () => {
  return (
    <Consumer>
      {({ ToggleText, sayHi }) => {
        return (
          <section className="welcome-message">
            <h1 onClick={() => ToggleText()}>
              {sayHi ? "Have a Good Time!" : "Welcome Message"}
            </h1>
          </section>
        );
      }}
    </Consumer>
  );
};

export default WelcomMessage;
