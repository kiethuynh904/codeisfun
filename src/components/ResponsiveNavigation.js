import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResponsiveNavigation({ navLinks, background, hoverBackground, linkColor, logo }) {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="responsive-toolbar"
            style={{ background }} >

            <ul style={{ background }}>
                {navLinks.map((link,index) =>
                    <li key={index}>
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}>
                            {link.text}
                            <FontAwesomeIcon icon={link.icon} />
                        </Link>
                    </li>
                )}
            </ul>

        </nav>
    )
}
export default ResponsiveNavigation