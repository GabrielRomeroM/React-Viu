import PropTypes from "prop-types"

function Footer({ links }) {
    return (
        <footer>
            <div className="footer">
                <span><a href="#">Enlace 1</a>   |   <a href="#">Enlace 2</a></span>
                <ul className="menu">
                    <li>
                        {links.map((link, index) => (
                            <a key={index} href= {link.url} >{link.name}</a>
                        ))}
                    </li>
                </ul>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default Footer