import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiCheck, HiArrowLeft, HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { roomsData } from '../data/rooms';

const RoomDetails = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [room, setRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);

        const foundRoom = roomsData.find(r => r.id === parseInt(roomId));
        if (foundRoom) {
            setRoom(foundRoom);
        } else {
            navigate('/rooms');
        }
    }, [roomId, navigate]);

    if (!room) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const openModal = (index) => {
        setCurrentImgIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % room.galleryImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + room.galleryImages.length) % room.galleryImages.length);
    };

    // Get the first 5 images for the grid
    const topImages = room.galleryImages?.slice(0, 5) || [];

    return (
        <div className="min-h-screen bg-[#fafafa] pt-24 pb-20 fade-in relative">

            {/* Fullscreen Image Modal Gallery */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeModal}>
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-[60]"
                    >
                        <HiX className="text-4xl" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all hover:scale-110 z-[60]"
                    >
                        <HiChevronLeft className="text-5xl" />
                    </button>

                    <div className="relative max-w-7xl max-h-[85vh] w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={room.galleryImages[currentImgIndex]}
                            alt={`Gallery view ${currentImgIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain select-none"
                        />
                        <div className="absolute -bottom-12 left-0 right-0 text-center text-white/50 text-sm tracking-widest">
                            {currentImgIndex + 1} / {room.galleryImages.length}
                        </div>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 transition-all hover:scale-110 z-[60]"
                    >
                        <HiChevronRight className="text-5xl" />
                    </button>
                </div>
            )}

            {/* Content Container */}
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">

                {/* 5-Image Masonry Grid Layout (Like the screenshot) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-12 lg:mb-16 mt-4">
                    {/* Large Left Image */}
                    {topImages.length > 0 && (
                        <div
                            className="relative h-[300px] md:h-[500px] cursor-pointer group overflow-hidden"
                            onClick={() => openModal(0)}
                        >
                            <img
                                src={topImages[0]}
                                alt={room.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay content matching screenshot style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate('/rooms'); }}
                                    className="flex items-center text-xs tracking-widest uppercase mb-4 hover:text-white/70 transition-colors z-10 relative"
                                >
                                    <HiArrowLeft className="mr-2" /> Back
                                </button>
                                <h1 className="text-4xl md:text-5xl font-serif mb-2">{room.name}</h1>
                                <p className="text-white/80 text-sm tracking-wider flex items-center">
                                    <span className="mr-2">📍</span> Serene Mountains, Munnar
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Small Right Images (2x2 Grid) */}
                    <div className="grid grid-cols-2 gap-2 h-[300px] md:h-[500px]">
                        {topImages.slice(1, 4).map((img, idx) => (
                            <div
                                key={idx + 1}
                                className="h-full w-full overflow-hidden cursor-pointer group"
                                onClick={() => openModal(idx + 1)}
                            >
                                <img
                                    src={img}
                                    alt={`Detail ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                        {/* 5th Image with 'View All' overlay */}
                        {topImages.length > 4 && (
                            <div
                                className="h-full w-full overflow-hidden cursor-pointer group relative"
                                onClick={() => openModal(4)}
                            >
                                <img
                                    src={topImages[4]}
                                    alt="Detail 4"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {room.galleryImages.length > 5 && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/60">
                                        <span className="text-white font-medium tracking-widest uppercase text-sm border-2 border-white px-4 py-2">
                                            +{room.galleryImages.length - 5} Media
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side: Information */}
                    <div className="lg:w-7/12 flex flex-col py-4">
                        <h2 className="text-3xl font-serif text-slate-800 mb-6">
                            Description
                        </h2>

                        <p className="text-lg text-neutral-600 leading-relaxed font-light tracking-wide mb-12">
                            {room.description}
                        </p>

                        <div className="mb-14">
                            <h3 className="text-sm font-semibold mb-6 text-black tracking-widest uppercase flex items-center">
                                Premium Amenities
                                <span className="ml-4 h-[1px] flex-1 bg-black/10"></span>
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {room.amenities?.map((amenity, index) => (
                                    <li key={index} className="flex items-start text-neutral-600 font-light tracking-wide">
                                        <HiCheck className="text-black text-xl mr-3 flex-shrink-0 opacity-80" />
                                        <span>{amenity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Booking Box */}
                    <div className="lg:w-5/12 flex flex-col py-4 mt-8 lg:mt-0">
                        {/* Booking Action Box (Right side floating) */}
                        <div className="sticky top-24 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-black/10 p-8 flex flex-col gap-8">
                            <div>
                                <h3 className="text-xl font-serif text-slate-800 mb-2">Reserve your stay</h3>
                                <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-6">Best price guaranteed</p>

                                <div className="space-y-4 mb-4 border-b border-neutral-100 pb-6">
                                    <div className="flex justify-between items-center text-sm tracking-wide">
                                        <span className="text-neutral-500">Max Guests</span>
                                        <span className="font-semibold">{room.capacity.replace('Up to ', '')}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm tracking-wide">
                                        <span className="text-neutral-500">Bed Type</span>
                                        <span className="font-semibold text-right">{room.beds}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Pricing</span>
                                    <div className="text-right">
                                        <p className="text-2xl font-serif text-black">{room.price}</p>
                                        {room.price !== 'Contact for pricing' && <p className="text-xs text-neutral-400">per night</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href="tel:+919446136155"
                                    className="btn-primary w-full px-10 py-5 text-center text-sm transition-all duration-300 transform hover:scale-[1.02]"
                                >
                                    Book Now
                                </a>
                                <a
                                    href={`https://wa.me/919446136155?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-10 py-4 text-center text-sm font-semibold tracking-widest uppercase transition-all duration-300 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                                >
                                    WhatsApp Us
                                </a>
                            </div>

                            <p className="text-xs text-center text-neutral-400 mt-2 tracking-wide font-light">
                                Prices exclude taxes and fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
