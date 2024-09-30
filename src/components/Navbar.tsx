import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import SearchBar from './SearchBar';
import { COMPANY_NAME } from '../utils/constants';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto">
                {/* Top Row: Company Name */}
                <div className="flex justify-between items-center">
                    <NavbarLink href="/" name={COMPANY_NAME} isBold={true} />

                    {/* Hamburger Menu Button (visible on small screens) */}
                    <div className="md:hidden mr-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Navbar Links and Search Bar */}
                <div className="flex justify-between items-center mt-4">
                    {/* Left: Navbar Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavbarLink href="/causes" name="Causes" />
                        <NavbarLink href="/fundraise" name="Fundraise" />
                        <NavbarLink href="/about" name="About" />
                    </div>

                    {/* Right: Search Bar */}
                    <div className="hidden md:block">
                        <SearchBar className="max-w-xs" />
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
            </div>
        </nav>
    );
}

export default Navbar;
