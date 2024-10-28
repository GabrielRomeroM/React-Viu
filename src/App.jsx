import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "/img/viulogo.png";
import Imgcontainer from "./components/Imgcontainer";
import Img from "/img/imgcontainer.jpg";
import CardContainer from "./components/CardContainer";
import GalleryContainer from "./components/GalleryContainer";
import CardTwoContainer from "./components/CardTwoContainer";
import Footer from "./components/layout/footer";


function App() {
  const NavLink = [
    { name: "Name 1", url: "Ayuda" },
    { name: "Name 2", url: "Formulario" },
    { name: "Name 3", url: "#" },
    { name: "Name 4", url: "#" },
  ];

  const cards = [
    {
      title: "",
      image: "img/viu.jpg",
      imageAlt: "Vite Card Image",
      description: "Description 1",
      buttonTitle: "Button 1",
    },
    {
      title: "",
      image: "img/viu.jpg",
      imageAlt: "Vite Card Image",
      description: "Description 2",
      buttonTitle: "Button 2",
    },
    {
      title: "",
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

  const cardsTwo = [
    {
      image: "img/1.Acompañamiento.webp",
      imageAlt: "Vite Card Image",
      title: "Title 1",
      description: "Description 1",
    },

    {
      image: "img/2.Docentes.webp",
      imageAlt: "Vite Card Image",
      title: "Title 2",
      description: "Description 2",
    },

    {
      image: "img/3.Modelo.webp",
      imageAlt: "Vite Card Image",
      title: "Title 3",
      description: "Description 3",
    },
  ]

  const links = [
    { name: "Name 1", url: "#" },
    { name: "Name 2", url: "#" },
    { name: "Name 3", url: "#" },
    { name: "Name 4", url: "#" },
  ]

  return (
    <>
      <Header
        ImageSrc={logo}
        ImageAlt="Vite logo"
        brandUrl="#"
        navLinks={NavLink}
      />

      <Imgcontainer ImageSrc={Img} ImageAlt="Vite logo" />
      <CardContainer cards={cards} />
      <GalleryContainer images={gallery}  title="Gallery"/>
      <CardTwoContainer title="Card Two" cards={cardsTwo} brandUrl="#" />
      <Footer links={links} />
    </>
  );
}

export default App;
