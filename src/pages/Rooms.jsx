import React from 'react';
import { useNavigate } from 'react-router-dom';
import { roomsData } from '../data/rooms';

const Rooms = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-neutral-50 pt-32 pb-24 border-b border-black/5">
            <div className="container max-w-6xl mx-auto px-4">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
                    <span className="text-black font-semibold tracking-widest uppercase text-sm mb-6 block">
                        Exclusive Suites
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-black tracking-widest uppercase mb-8">
                        Our Collections
                    </h1>
                    <div className="w-16 h-[1px] bg-black mx-auto mb-8"></div>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light tracking-wide">
                        Choose from our carefully designed rooms, each offering an exquisite blend of premium comfort, modern aesthetics, and breathtaking scenic mountain views.
                    </p>
                </div>

                {/* Room Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {roomsData.map((room) => (
                        <div
                            key={room.id}
                            className="group flex flex-col bg-white overflow-hidden shadow-soft transition-all duration-500 border border-black/10 hover:border-black hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-[350px] overflow-hidden bg-neutral-200">
                                <img
                                    src={room.mainImage}
                                    alt={room.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Floating Badges */}
                                <div className="absolute top-6 right-6 flex flex-col gap-2">
                                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-semibold tracking-widest uppercase text-black flex items-center gap-2 border border-black/10">
                                        <span>GUESTS:</span> {room.capacity.replace('Up to ', '')}
                                    </div>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-10 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-black mb-4 uppercase tracking-widest">
                                    {room.name}
                                </h2>

                                <div className="inline-flex items-center text-sm tracking-wide text-neutral-800 bg-neutral-100 border border-black/5 px-4 py-2 mb-8 w-fit uppercase font-medium">
                                    <span className="mr-3 opacity-60">BED:</span> {room.beds}
                                </div>

                                <p className="text-neutral-500 font-light leading-relaxed mb-10 flex-grow tracking-wide">
                                    {room.description}
                                </p>

                                {/* Short Amenities */}
                                <ul className="mb-12 space-y-4">
                                    {room.amenities.slice(0, 3).map((amenity, index) => (
                                        <li key={index} className="flex items-center text-neutral-600 font-light tracking-wide">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full mr-4 opacity-70"></div>
                                            {amenity}
                                        </li>
                                    ))}
                                    <li className="text-sm font-medium text-neutral-400 pl-[22px] mt-4 uppercase tracking-wider">
                                        + {room.amenities.length - 3} Exclusive Amenities
                                    </li>
                                </ul>

                                {/* Action button */}
                                <button
                                    className="btn-outline w-full text-sm"
                                    onClick={() => navigate(`/rooms/${room.id}`)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;
