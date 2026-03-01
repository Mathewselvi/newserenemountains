import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
    '/images/rooms/glass-villa/1.jpg',
    '/images/rooms/glass-villa/2.jpg',
    '/images/rooms/glass-villa/3.jpg',
    '/images/rooms/glass-villa/4.jpg',
    '/images/rooms/glass-villa/IMG_3957.jpg',
    '/images/rooms/glass-villa/IMG_3959.jpg',
    '/images/rooms/glass-villa/IMG_4060.jpg',
    '/images/rooms/glass-villa/IMG_4062.jpg',
    '/images/rooms/glass-villa/IMG_4056.jpg',
    '/images/rooms/glass-villa/IMG_4058.jpg',
    '/images/rooms/glass-villa/IMG_4061.jpg',
    '/images/rooms/glass-villa/IMG_4063.jpg',
    '/images/rooms/glass-villa/IMG_4053.jpg',
    '/images/rooms/glass-villa/IMG_4057.jpg',
    '/images/rooms/glass-villa/IMG_3955.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden bg-black">
                {/* Background image slider without black fade, quick transition fade, slow zoom */}
                {heroImages.map((img, index) => {
                    const isActive = index === currentImageIndex;
                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url('${img}')`,
                                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 10s linear',
                                }}
                            ></div>
                        </div>
                    );
                })}

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 z-0 bg-black/40 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto animate-slide-up flex flex-col items-center justify-center h-full pt-40">
                    <span className="block text-white/80 text-sm tracking-[0.3em] uppercase mb-6 drop-shadow-md">
                        Nature Meets Luxury
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-widest drop-shadow-xl text-balance uppercase">
                        Serene Mountains
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-12 font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed text-balance tracking-wide">
                        Immerse yourself in panoramic mountain views from our signature Glass Villa and premium luxury suites in Munnar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/rooms" className="btn-primary w-full sm:w-auto text-sm px-10 py-4 bg-white text-black border-white hover:bg-black hover:text-white hover:border-black">
                            Explore Collections
                        </Link>
                        <Link to="/contact" className="btn-outline w-full sm:w-auto text-sm px-10 py-4 border-white text-white hover:bg-white hover:text-black">
                            Contact Concierge
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-32 px-4 bg-white">
                <div className="container max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 tracking-widest uppercase">
                        Your Premium Getaway
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-20 max-w-3xl mx-auto font-light tracking-wide">
                        Surrounded by the lush greenery of Munnar, our luxury resort offers a flawless blend of comfort, elegance, and raw nature. From our immersive 360-degree Glass Villa to our expansive Super Deluxe Suites, enjoy world-class amenities and breathtaking valley views that will redefine your stay.
                    </p>

                    {/* Auto-scrolling marquee for features */}
                    <div className="overflow-hidden w-full relative py-4 mt-8">
                        <div className="flex w-max animate-marquee">
                            {[...Array(2)].map((_, arrayIndex) => (
                                <div key={arrayIndex} className="flex gap-8 md:gap-12 px-4 md:px-6">
                                    {[
                                        { num: '01', title: 'Glass Villas', desc: 'Experience 360° nature panoramas.' },
                                        { num: '02', title: 'Mountain Views', desc: 'Wake up to misty panoramic peaks.' },
                                        { num: '03', title: 'Premium Suites', desc: 'Rest in luxury and absolute peace.' },
                                        { num: '04', title: 'Immersive Nature', desc: 'A serene atmosphere to unwind.' }
                                    ].map((feature, idx) => (
                                        <div key={`${arrayIndex}-${idx}`} className="group w-[260px] md:w-[300px] shrink-0 p-8 border border-black/10 hover:border-black transition-all duration-500 bg-white hover:bg-black hover:text-white hover:-translate-y-2 text-left">
                                            <div className="text-3xl font-light text-neutral-400 mb-8 group-hover:text-white/50 transition-colors duration-500">
                                                {feature.num}
                                            </div>
                                            <h3 className="text-xl font-semibold tracking-wider uppercase mb-4 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                                            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities Highlight */}
            <section className="py-32 bg-neutral-50 border-y border-black/5">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-widest uppercase">Signature Amenities</h2>
                        <div className="w-16 h-[1px] bg-black mx-auto mt-8"></div>
                    </div>

                    {/* Auto-scrolling marquee for amenities */}
                    <div className="overflow-hidden w-full relative">
                        <div className="flex w-max animate-marquee">
                            {[...Array(2)].map((_, arrayIndex) => (
                                <div key={arrayIndex} className="flex gap-12 md:gap-24 px-6 md:px-12">
                                    {[
                                        { title: 'Views', desc: 'Unobstructed 360° Panoramas' },
                                        { title: 'Service', desc: '24/7 Premium Concierge' },
                                        { title: 'Connectivity', desc: 'High-speed Fiber WiFi' },
                                        { title: 'Interiors', desc: 'Upscale Modern Design' }
                                    ].map((facility, idx) => (
                                        <div key={`${arrayIndex}-${idx}`} className="flex flex-col items-center group text-center w-[150px] shrink-0">
                                            <div className="w-24 h-24 mb-6 md:w-32 md:h-32 bg-white border border-black/10 rounded-full flex items-center justify-center text-sm tracking-widest uppercase font-semibold text-black shadow-sm group-hover:bg-black group-hover:text-white group-hover:scale-105 transition-all duration-500">
                                                {facility.title}
                                            </div>
                                            <span className="text-neutral-500 text-sm font-light tracking-wide group-hover:text-black transition-colors">{facility.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
