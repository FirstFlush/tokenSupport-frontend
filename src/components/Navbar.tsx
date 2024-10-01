import React, { useState } from 'react';
import NavbarLink from './NavbarLink';
import SearchBar from './SearchBar';
import { COMPANY_NAME } from '../utils/constants';
import './Navbar.css';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-header text-headerText shadow-md p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl text-white tracking-widest">
                        <NavbarLink href="/" name={COMPANY_NAME} isBold={true} />
                    </h1>

                    <div className="md:hidden mr-4">
    <button 
        onClick={toggleMenu} 
        className="relative focus:outline-none group"
    >
        {/* Background Circle */}
        <div className="absolute inset-0 bg-headerLight10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-200 ease-in-out z-0"></div>
        
        {/* Hamburger Icon */}
        <div className={`hamburger relative z-10 ${isOpen ? 'open' : ''}`}>
            <span className="line top group-hover:bg-highlightLight10"></span>
            <span className="line middle group-hover:bg-highlightLight10"></span>
            <span className="line bottom group-hover:bg-highlightLight10"></span>
        </div>
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
                        <SearchBar className="w-full" />
                        {/* <input 
                            type="text" 
                            placeholder="Search for causes..." 
                            className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        /> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;





