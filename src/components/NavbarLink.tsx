import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  href: string;
  name: string;
  isBold?: boolean;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, name, isBold = false, onClick }) => {
  return (
    <Link
      to={href}
      className={`relative inline-block px-4 py-2 transition-all duration-300 ease-in-out hover:text-highlightLight10 ${isBold ? 'font-bold' : 'font-medium'}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default NavbarLink;