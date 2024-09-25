import PropTypes from "prop-types";

function Header({ ImageSrc, ImageAlt, brandUrl, navLinks }) {
  return (
    <header>
      <nav>
        <div className="header">
          <a href={brandUrl}>
            <img src={ImageSrc} alt={ImageAlt} />
          </a>
          <ul className="menu top">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
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
  navLinks: PropTypes.array.isRequired,
};

export default Header;
