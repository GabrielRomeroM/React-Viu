import PropTypes from "prop-types";
import viuimg from "/public/img/viu.jpg";
import Card from "../components/Card";

function CardContainer({ cards }) {
  const handleCard = () => {
    console.log(title);
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {cards.map((card, index) => (
            <Card
            key= {index} 
            imageAlt= {card.imageAlt}
            title= {card.title}
            description= {card.description}
            buttonTitle= {card.buttonTitle}
            action= {() => {
              handleCard(card.title);
            }}
            buttonColor= {card.buttonColor}
            image= {card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      imageAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonTitle: PropTypes.string.isRequired,
      buttonColor: PropTypes.string,
    })
  ).isRequired,
};

export default CardContainer;
