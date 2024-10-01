import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "/img/viulogo.png";
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

  const cards = [
    {
      image: "/img/viu.jpg",
      imageAlt: "Vite Card Image",
      title: "Title 1",
      description: "Description 1",
      buttonTitle: "Button 1",
    },
    {
      image: "/img/viu.jpg",
      imageAlt: "Vite Card Image",
      title: "Title 2",
      description: "Description 2",
      buttonTitle: "Button 2",
    },
    {
      image: "/img/viu.jpg",
      imageAlt: "Vite Card Image",
      title: "Title 3",
      description: "Description 3",
      buttonTitle: "Button 3",
    }
  ]

  return (
    <>
      <Header
        ImageSrc={logo}
        ImageAlt="Vite logo"
        brandUrl="#"
        navLinks={navLinks}
      />

      <Imgcontainer ImageSrc={Img} ImageAlt="Vite logo" />
      <CardContainer cards={cards} />
    </>
  );
}

export default App;
