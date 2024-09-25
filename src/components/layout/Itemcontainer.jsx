import "../public/css/style.css";
import Imgcontainer from "./Imgcontainer";
import Img from "../public/img/imgcontainer.jpg";

function Itemcontainer() {
  return (
    <>
      <Imgcontainer
        ImageSrc={Img}
        ImageAlt="Img"
      />
    </>
  );
}

export default Itemcontainer;
