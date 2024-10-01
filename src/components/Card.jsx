import PropTypes from "prop-types";
import viuimg from "/img/viu.jpg";

function Card({ 
  image = viuimg, 
  imageAlt, 
  title, 
  description,
  buttonTitle, 
  action,
  buttonColor,
}) {
  return (
    <div className="row">
      <div className="col">
        <h2>{title}</h2>
        <div className="card">
          <img src={image} alt={imageAlt} />
          <p>{description}</p>
          <button 
            className="btn" 
            onClick={action} 
            style={{ backgroundColor: buttonColor }}
            >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  buttonColor: PropTypes.string,
};

export default Card;
