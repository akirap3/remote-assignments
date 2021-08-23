import React, { useContext } from "react";
import WelcomMessage from "./WelcomMessage";
import SectionTitle from "./SectionTitle";
import ContentSection from "./ContentSection";
import Button from "./Button";
import { MYCONTEXT } from "../../Context";

const Main = () => {
  const { toggle } = useContext(MYCONTEXT);
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
