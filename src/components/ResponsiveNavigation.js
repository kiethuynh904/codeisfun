import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResponsiveNavigation({ navLinks, background, hoverBackground, linkColor, logo }) {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="toolbar"
            style={{ background }} >

            <div className="toolbar__logo" >
                <img width="60px" height="60px" src={logo} />
                <p>Codeisfun</p>
            </div>

            <div className="toolbar__line"><span></span></div>

            <ul style={{ background }}
                className="toolbar__menu"
                >
                {navLinks.map((link,index) =>
                    <li key={index}>
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}>
                            {link.text}
                            {/* <FontAwesomeIcon icon={link.icon} /> */}
                        </Link>
                    </li>
                )}
            </ul>

        </nav>
    )
}
export default ResponsiveNavigation