import PropTypes from "prop-types";

function Imgcontainer({ ImageSrc, ImageAlt }) {
    return (
        <div className="container">
            <img src={ImageSrc} alt={ImageAlt}/>
        </div>
    );
}

Imgcontainer.propTypes = {
    ImageSrc: PropTypes.string.isRequired,
    ImageAlt: PropTypes.string.isRequired,
};

export default Imgcontainer;