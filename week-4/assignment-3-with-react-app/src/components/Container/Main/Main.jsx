import React, { useContext } from "react";
import WelcomMessage from "./WelcomMessage";
import SectionTitle from "./SectionTitle";
import ContentSection from "./ContentSection";
import Button from "./Button";
import { MyContext } from "../../Context";

const Main = () => {
  const { toggle } = useContext(MyContext);
  return (
    <main>
      <WelcomMessage />
      <SectionTitle />
      <ContentSection />
      <Button />
      {!toggle && <ContentSection />}
    </main>
  );
};

export default Main;
