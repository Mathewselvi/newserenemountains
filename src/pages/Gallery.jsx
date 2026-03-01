import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const images = [
        // Hero / Exterior Images
        { src: '/images/12.jpg', alt: 'Premium Resort Front' },

        // Glass Villa
        { src: '/images/rooms/glass-villa/IMG_3954.jpg', alt: 'Glass Villa Exterior' },
        { src: '/images/rooms/glass-villa/IMG_3955.jpg', alt: 'Glass Villa View' },
        { src: '/images/rooms/glass-villa/IMG_3957.jpg', alt: 'Glass Villa Interior' },
        { src: '/images/rooms/glass-villa/IMG_3959.jpg', alt: 'Glass Villa Comfort' },
        { src: '/images/rooms/glass-villa/IMG_4052.jpg', alt: 'Glass Villa Panorama' },
        { src: '/images/rooms/glass-villa/IMG_4053.jpg', alt: 'Glass Villa Setup' },
        { src: '/images/rooms/glass-villa/IMG_4054.jpg', alt: 'Glass Villa Nature' },
        { src: '/images/rooms/glass-villa/IMG_4055.jpg', alt: 'Glass Villa Landscape' },
        { src: '/images/rooms/glass-villa/IMG_4056.jpg', alt: 'Glass Villa Ambiance' },
        { src: '/images/rooms/glass-villa/IMG_4057.jpg', alt: 'Glass Villa Detail' },
        { src: '/images/rooms/glass-villa/IMG_4058.jpg', alt: 'Glass Villa Space' },
        { src: '/images/rooms/glass-villa/IMG_4060.jpg', alt: 'Glass Villa Elegance' },
        { src: '/images/rooms/glass-villa/IMG_4061.jpg', alt: 'Glass Villa Setting' },
        { src: '/images/rooms/glass-villa/IMG_4062.jpg', alt: 'Glass Villa Decor' },
        { src: '/images/rooms/glass-villa/IMG_4063.jpg', alt: 'Glass Villa Lifestyle' },
        { src: '/images/1.jpg', alt: 'Resort Overview' },
        { src: '/images/2.jpg', alt: 'Resort View' },
        { src: '/images/3.jpg', alt: 'Munnar Mountains' },
        { src: '/images/4.jpg', alt: 'Living Area' },
        { src: '/images/5.jpg', alt: 'Dining Area' },
        { src: '/images/6.jpg', alt: 'Balcony View' },
        { src: '/images/7.jpg', alt: 'Garden/Outdoor' },
        { src: '/images/8.jpg', alt: 'Nature View' },
        { src: '/images/9.jpg', alt: 'Scenic View' },
        { src: '/images/10.jpg', alt: 'Property Amenities' },
        { src: '/images/11.jpg', alt: 'Landscape' },

        // Deluxe Room
        { src: '/images/rooms/deluxe/IMG_3960.jpg', alt: 'Deluxe Room View' },
        { src: '/images/rooms/deluxe/IMG_3961.jpg', alt: 'Deluxe Room Detail' },
        { src: '/images/rooms/deluxe/IMG_3962.jpg', alt: 'Deluxe Room Interior' },
        { src: '/images/rooms/deluxe/IMG_3963.jpg', alt: 'Deluxe Room Features' },
        { src: '/images/rooms/deluxe/IMG_3964.jpg', alt: 'Deluxe Room Wide' },
        { src: '/images/rooms/deluxe/IMG_3965.jpg', alt: 'Deluxe Room Comfort' },
        { src: '/images/rooms/deluxe/IMG_3966.jpg', alt: 'Deluxe Room Ambiance' },
        { src: '/images/rooms/deluxe/IMG_3967.jpg', alt: 'Deluxe Room Style' },
        { src: '/images/rooms/deluxe/IMG_3977.jpg', alt: 'Deluxe Room Relax' },
        { src: '/images/rooms/deluxe/IMG_3978.jpg', alt: 'Deluxe Room Setting' },
        { src: '/images/rooms/deluxe/IMG_3979.jpg', alt: 'Deluxe Room Space' },
        { src: '/images/rooms/deluxe/IMG_3980.jpg', alt: 'Deluxe Room Elegance' },
        { src: '/images/rooms/deluxe/IMG_3981.jpg', alt: 'Deluxe Room View' },
        { src: '/images/rooms/deluxe/IMG_3982.jpg', alt: 'Deluxe Room Setup' },
        { src: '/images/rooms/deluxe/IMG_3983.jpg', alt: 'Deluxe Room Close-up' },

        // Super Deluxe Room
        { src: '/images/rooms/super-deluxe/IMG_3968.jpg', alt: 'Super Deluxe Room' },
        { src: '/images/rooms/super-deluxe/IMG_3969.jpg', alt: 'Super Deluxe Interior' },
        { src: '/images/rooms/super-deluxe/IMG_3970.jpg', alt: 'Super Deluxe Comfort' },
        { src: '/images/rooms/super-deluxe/IMG_3971.jpg', alt: 'Super Deluxe Details' },
        { src: '/images/rooms/super-deluxe/IMG_3972.jpg', alt: 'Super Deluxe View' },
        { src: '/images/rooms/super-deluxe/IMG_3973.jpg', alt: 'Super Deluxe Space' },
        { src: '/images/rooms/super-deluxe/IMG_3974.jpg', alt: 'Super Deluxe Ambiance' },
        { src: '/images/rooms/super-deluxe/IMG_3975.jpg', alt: 'Super Deluxe Layout' },
        { src: '/images/rooms/super-deluxe/IMG_3976.jpg', alt: 'Super Deluxe Style' },

    ];

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
        setCurrentImgIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 border-b border-black/5 relative">

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
                            src={images[currentImgIndex].src}
                            alt={images[currentImgIndex].alt}
                            className="max-w-full max-h-[85vh] object-contain select-none"
                        />
                        <div className="absolute -bottom-12 left-0 right-0 text-center text-white/50 text-sm tracking-widest">
                            {currentImgIndex + 1} / {images.length}
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

            <div className="container max-w-7xl mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
                    <span className="text-black font-semibold tracking-widest uppercase text-sm mb-6 block">
                        Visual Tour
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-black tracking-widest uppercase mb-8">
                        The Gallery
                    </h1>
                    <div className="w-16 h-[1px] bg-black mx-auto mb-8"></div>
                    <p className="text-lg text-neutral-500 leading-relaxed font-light tracking-wide">
                        Take a visual journey through New Serene Mountains and explore our stunning property and breathtaking natural surroundings.
                    </p>
                </div>

                {/* Masonry-like Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                    {images.map((img, index) => {
                        // Make images span 2 rows dynamically for a masonry effect across 50 images
                        const isLarge = index % 5 === 0 || index % 7 === 0;

                        return (
                            <div
                                key={index}
                                onClick={() => openModal(index)}
                                className={`group relative overflow-hidden shadow-soft cursor-pointer bg-neutral-100 ${isLarge ? 'row-span-2' : 'row-span-1'
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0"
                                />

                                {/* Elegant Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-white text-sm font-medium tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {img.alt}
                                    </span>
                                    <div className="w-12 h-[1px] bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default Gallery;
