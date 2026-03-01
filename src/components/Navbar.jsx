import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/rooms', name: 'Rooms' },
        { path: '/gallery', name: 'Gallery' },
        { path: '/contact', name: 'Contact' },
    ];

    // Determine if we need dark text (black) or light text (white)
    // Dark text if scrolled OR if not strictly on the home page ('/')
    const isDarkText = scrolled || location.pathname !== '/';

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-black/10 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className={`text-xl md:text-2xl font-bold tracking-widest uppercase transition-colors duration-500 ${isDarkText ? 'text-black hover:text-neutral-600' : 'text-white hover:text-neutral-300'}`}
                    onClick={closeMenu}
                >
                    New Serene Mountains
                </Link>

                {/* Mobile menu icon */}
                <div className={`md:hidden text-2xl cursor-pointer transition-colors duration-500 ${isDarkText ? 'text-black' : 'text-white'}`} onClick={toggleMenu}>
                    {isOpen ? <HiX /> : <HiMenu />}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm font-medium tracking-widest uppercase transition-all duration-500 py-2 relative group ${isDarkText
                                            ? (isActive ? 'text-black' : 'text-neutral-500 hover:text-black')
                                            : (isActive ? 'text-white' : 'text-white/70 hover:text-white')
                                            }`}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                        {/* Premium animated underline */}
                                        <span className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left transition-transform duration-500 ${isDarkText ? 'bg-black' : 'bg-white'} ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}></span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <Link to="/rooms" className={`btn-outline text-sm px-6 py-2.5 ${!isDarkText ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}>
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-black/10 shadow-xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <ul className="flex flex-col py-8 px-6 space-y-6 text-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`block text-lg font-medium tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-black' : 'text-neutral-500 hover:text-black'
                                        }`}
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <Link to="/rooms" className="btn-primary w-full" onClick={closeMenu}>
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
