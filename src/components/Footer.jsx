import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 mt-auto">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    {/* Brand section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-6">Serene Mountains</h3>
                        <p className="text-neutral-400 leading-relaxed max-w-sm tracking-wide font-light">
                            Anachal, Munnar, Kerala 685565 <br /><br />
                            Discover tranquility and ultimate luxury in the heart of nature.
                        </p>
                    </div>

                    {/* Links section */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-8 tracking-widest uppercase">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Rooms', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-neutral-400 hover:text-white transition-colors duration-500 flex items-center group font-light tracking-widest uppercase text-sm"
                                    >
                                        <span className="w-0 h-[1px] bg-white mr-0 transition-all duration-500 group-hover:w-4 group-hover:mr-3"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-8 tracking-widest uppercase">Contact Concierge</h4>
                        <div className="space-y-6 text-sm font-light tracking-widest uppercase">
                            <a href="mailto:josephvarghese1919@gmail.com" className="block text-neutral-400 hover:text-white transition-colors duration-500">
                                josephvarghese1919@gmail.com
                            </a>
                            <a href="tel:+919446136155" className="block text-neutral-400 hover:text-white transition-colors duration-500">
                                +91 9446136155
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} Serene Mountains Munnar.</p>
                    <div className="mt-6 md:mt-0 flex space-x-8">
                        <Link to="#" className="hover:text-white transition-colors duration-500">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors duration-500">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
