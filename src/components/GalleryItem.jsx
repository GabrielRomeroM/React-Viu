import PropTypes from "prop-types";

function GalleryItem({ image }) {
    return (
        <div className="gallery-item">
          <img src={image} alt="Imagen Campus" />
        </div>
    );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryItem