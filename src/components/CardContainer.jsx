import ImgCard from "../../public/img/viu.jpg";

function CardContainer() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h2>Encabezado</h2>
                <div className="card">
                    <img src= {ImgCard} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi corrupti a ex repellat suscipit dolorem quisquam repudiandae ratione, temporibus expedita atque minus illum, rem illo nam amet. Commodi, saepe?</p>
                    <a href="#" className="btn">URL</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CardContainer;
