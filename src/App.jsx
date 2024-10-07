import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "/img/viulogo.png";
import Imgcontainer from "./components/Imgcontainer";
import Img from "/img/imgcontainer.jpg";
import CardContainer from "./components/CardContainer";
import GalleryContainer from "./components/GalleryContainer";


function App() {
  const navLinks = [
    { name: "Name 1", url: "#" },
    { name: "Name 2", url: "#" },
    { name: "Name 3", url: "#" },
    { name: "Name 4", url: "#" },
  ];

  const cards = [
    {
      title: "Title 1",
      image: "img/viu.jpg",
      imageAlt: "Vite Card Image",
      description: "Description 1",
      buttonTitle: "Button 1",
    },
    {
      title: "Title 2",
      image: "img/viu.jpg",
      imageAlt: "Vite Card Image",
      description: "Description 2",
      buttonTitle: "Button 2",
    },
    {
      title: "Title 3",
      image: "img/viu.jpg",
      imageAlt: "Vite Card Image",
      description: "Description 3",
      buttonTitle: "Button 3",
      buttonColor: "#f57600",
    }
  ]

  const gallery = [
    "img/viuCampus1.jpg",
    "img/viuCampus2.jpg",
    "img/viuCampus3.jpg",
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
      <GalleryContainer images={gallery}  title="Gallery"/>
    </>
  );
}

export default App;
