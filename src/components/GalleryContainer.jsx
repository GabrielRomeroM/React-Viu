import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

function GalleryContainer({ title, images }) {
  return (
    <section className="gallery">
      <h2> {title} </h2>
      <div className="gallery-container">
        {images.map((images, index) => (
          <GalleryItem key={index} image={images} />
        ))}
      </div>
    </section>
  );
}

GalleryContainer.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired
    ).isRequired,
};

export default GalleryContainer;