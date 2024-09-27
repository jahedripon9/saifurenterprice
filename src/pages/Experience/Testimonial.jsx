import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Use 0-indexed slides
    const totalSlides = 4;

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop back to first slide
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="container mx-auto">
            {/* Carousel container with smooth sliding */}
            <div className="relative w-full h-96 overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${activeSlide * 100}%)`, // Slide transition
                    }}
                >
                    {/* Slides */}
                    <div className="w-full flex-shrink-0 h-96 flex justify-center items-center">
                        <img src={img1} className="block max-h-full object-contain" />
                    </div>
                    <div className="w-full flex-shrink-0 h-96 flex justify-center items-center">
                        <img src={img2} className="block max-h-full object-contain" />
                    </div>
                    <div className="w-full flex-shrink-0 h-96 flex justify-center items-center">
                        <img src={img1} className="block max-h-full object-contain" />
                    </div>
                    <div className="w-full flex-shrink-0 h-96 flex justify-center items-center">
                        <img src={img2} className="block max-h-full object-contain" />
                    </div>
                </div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center gap-2 py-2">
                {[...Array(totalSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`btn btn-xs ${activeSlide === index ? 'btn-active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
