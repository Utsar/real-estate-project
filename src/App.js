import { SLiderData } from "./assets/data/SliderData";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SLiderData} />
    </>
  );
};

export default App;
