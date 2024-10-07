import PropTypes from "prop-types";

function CardTwoItem({ image, imageAlt, title, description, brandUrl }) {
  return (
    <div className="card">
        <a href={brandUrl} >
            <img src= {image} alt= {imageAlt} />
            <h3> {title} </h3>
            <p> {description} </p>
        </a>
    </div>
  );
}

CardTwoItem.propTypes = {
  brandUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CardTwoItem;
