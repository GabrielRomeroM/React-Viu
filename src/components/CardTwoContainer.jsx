import PropTypes from "prop-types";
import CardTwoItem from "./CardTwoItem";

function CardTwoContainer({ title, cards, brandUrl}) {
    return (
        <div className="container-card">
            <h2> {title} </h2>
            <div className="col-card">
                <div className="card">
                    {/* <a href={brandUrl}> */}
                    {cards.map(( card, index) => (
                        <CardTwoItem 
                        key={index}
                        image={card.image} 
                        imageAlt={card.imageAlt} 
                        title={card.title} 
                        description={card.description}
                        />
                    ))}
                    {/* </a> */}
                </div>    
            </div>
        </div>
    );
}

CardTwoContainer.propTypes = {
    title: PropTypes.string,
    // brandUrl: PropTypes.string,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            imageAlt: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default CardTwoContainer;