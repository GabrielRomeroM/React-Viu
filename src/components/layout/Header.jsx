import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

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
                <NavLink to={link.url}>{link.name}</NavLink>
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
