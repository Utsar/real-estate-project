import { useState } from "react";
import { InfoData } from "./assets/data/InfoData";
import { SliderData } from "./assets/data/SliderData";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </>
  );
};

export default App;
