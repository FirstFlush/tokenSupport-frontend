import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  href: string;
  name: string;
  isBold?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, name, isBold = false }) => {
  return (
    <Link
      to={href}
      className={`relative inline-block px-4 py-2 text-gray-700 transition-all duration-300 ease-in-out hover:text-highlight ${isBold ? 'font-bold' : 'font-medium'}`}
    >
      {name}
      {/* Underline Animation */}
      <span
        className="absolute left-0 bottom-0 w-full h-0.5 bg-highlight scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100 origin-left"
        style={{ transformOrigin: 'left' }} // This ensures that the underline grows from left to right
      />
    </Link>
  );
};

export default NavbarLink;
