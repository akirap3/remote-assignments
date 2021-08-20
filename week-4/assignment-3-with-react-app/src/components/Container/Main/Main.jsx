import React from "react";
import WelcomMessage from "./WelcomMessage";
import SectionTitle from "./SectionTitle";
import ContentSection from "./ContentSection";
import Button from "./Button";

const Main = (props) => {
  const { sayHi, ToggleText, toggle, handleToggle } = props;
  return (
    <main>
      <WelcomMessage sayHi={sayHi} ToggleText={ToggleText} />
      <SectionTitle />
      <ContentSection />
      <Button toggle={toggle} handleToggle={handleToggle} />
      {!toggle && <ContentSection />}
    </main>
  );
};

export default Main;
