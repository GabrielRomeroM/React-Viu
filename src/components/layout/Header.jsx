import PropTypes from "prop-types";

function Header({ ImageSrc, ImageAlt, brandUrl }) {
  return (
    <header>
      <nav>
        <div className="header">
          <a href={brandUrl}>
            <img src={ImageSrc} alt={ImageAlt} />
          </a>
          <ul className="menu top">
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
            <li>
              <a href="formulario/formulario.html">Enlace 4</a>
            </li>
            <li>
              <a href="ayuda/ayuda.html">Enlace 5</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  ImageSrc: PropTypes.string.isRequired,
  ImageAlt: PropTypes.string.isRequired,
  brandUrl: PropTypes.string.isRequired,
};

export default Header;
