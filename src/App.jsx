import "../public/css/style.css";
import Header from "./components/layout/Header";
import logo from "../public/img/viulogo.png";

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
    </>
  );
}

export default App;
