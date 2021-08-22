import React from "react";
import WelcomMessage from "./WelcomMessage";
import SectionTitle from "./SectionTitle";
import ContentSection from "./ContentSection";
import Button from "./Button";
import { Consumer } from "../../Context";

const Main = () => {
  return (
    <Consumer>
      {({ toggle }) => {
        return (
          <main>
            <WelcomMessage />
            <SectionTitle />
            <ContentSection />
            <Button />
            {!toggle && <ContentSection />}
          </main>
        );
      }}
    </Consumer>
  );
};

export default Main;
