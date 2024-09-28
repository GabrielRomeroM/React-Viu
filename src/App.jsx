import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "../public/img/viulogo.png";
import Imgcontainer from "./components/Imgcontainer";
import Img from "../public/img/imgcontainer.jpg";
import CardContainer from "./components/CardContainer";

function App() {
  const navLinks = [
    { name: "Name 1", url: "#" },
    { name: "Name 2", url: "#" },
    { name: "Name 3", url: "#" },
    { name: "Name 4", url: "#" },
  ];

  return (
    <>
      <Header
        ImageSrc={logo}
        ImageAlt="Vite logo"
        brandUrl="#"
        navLinks={navLinks}
      />

      <Imgcontainer ImageSrc={Img} ImageAlt="Vite logo" />
      <CardContainer />
    </>
  );
}

export default App;
