import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import { COMPANY_NAME } from '../utils/constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <NavbarLink href="/" name={COMPANY_NAME} isBold={true} />
                </div>

                {/* Search Bar (hidden on small screens) */}
                <div className="hidden md:block relative">
                    <input 
                        type="text" 
                        placeholder="Search for causes..." 
                        className="w-64 px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M8 4a8 8 0 100 16 8 8 0 100-16zm12 12l-4-4" 
                            />
                        </svg>
                    </button>
                </div>

                {/* Hamburger Menu Button (visible on small screens) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (collapsible) */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="flex flex-col space-y-4 px-4 py-2">
                    <NavbarLink href="/causes" name="Causes" />
                    <NavbarLink href="/fundraise" name="Fundraise" />
                    <NavbarLink href="/about" name="About" />
                </div>

                {/* Mobile Search Bar */}
                <div className="flex justify-center px-4 py-2">
                    <input 
                        type="text" 
                        placeholder="Search for causes..." 
                        className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Regular Links (visible on larger screens) */}
            <div className="hidden md:flex items-center space-x-8">
                <NavbarLink href="/causes" name="Causes" />
                <NavbarLink href="/fundraise" name="Fundraise" />
                <NavbarLink href="/about" name="About" />
            </div>
        </nav>
    );
}

export default Navbar;
