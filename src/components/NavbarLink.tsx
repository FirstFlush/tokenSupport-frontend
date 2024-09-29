import React from 'react';
import { Link } from 'react-router-dom';


interface NavbarLinkProps {
    href: string;
    name: string;
    isBold?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({href, name, isBold}) => {
    const boldClass = isBold ? "font-bold" : "";
    return (
        <div className={`px-6 py-2 tracking-wider ${boldClass}`}>
            <Link to={href}>{name}</Link>
        </div>
    )
}

export default NavbarLink; 