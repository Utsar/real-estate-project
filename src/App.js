import { SliderData } from "./assets/data/SliderData";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
      <Dropdown />
    </>
  );
};

export default App;
