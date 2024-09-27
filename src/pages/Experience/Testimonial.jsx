import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.jpg'; // Ensure this path is correct
import img2 from '../../assets/img2.jpg'; // Ensure this path is correct

const Testimonial = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 4;

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const messages = [
        "Your visa has been successfully approved. Welcome to your next adventure!",
        "Congratulations! Your visa application has been approved.",
        "Success! Your visa is officially in hand. Start planning your journey!",
        "Great news! Your visa has been successfully received. Exciting times ahead!",
        "Visa secured! You're one step closer to your dream destination."
    ];

    const [currentMessage, setCurrentMessage] = useState(messages[0]);

    // Auto change messages effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => {
                const currentIndex = messages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % messages.length;
                return messages[nextIndex];
            });
        }, 2000); // Change message every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [messages]);

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold">
                Visa Success Achieved
            </h2>
            <p className="text-center text-lg mt-4 mb-12 text-gray-500">
                {currentMessage}
            </p>
            {/* Carousel container with smooth sliding */}
            <div className="relative w-full h-96 overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${activeSlide * 100}%)`, // Slide transition
                    }}
                >
                    {/* Slide 1 */}
                    <div className="w-full flex-shrink-0 h-full flex justify-center items-center">
                        <img src={img1} className="block max-h-full object-contain" alt="Visa Image 1" />
                    </div>

                    {/* Slide 2 */}
                    <div className="w-full flex-shrink-0 h-full flex justify-center items-center">
                        <img src={img2} className="block max-h-full object-contain" alt="Visa Image 2" />
                    </div>

                    {/* Slide 3 */}
                    <div className="w-full flex-shrink-0 h-full flex justify-center items-center">
                        <img src={img1} className="block max-h-full object-contain" alt="Visa Image 3" />
                    </div>

                    {/* Slide 4 */}
                    <div className="w-full flex-shrink-0 h-full flex justify-center items-center">
                        <img src={img2} className="block max-h-full object-contain" alt="Visa Image 4" />
                    </div>
                </div>
            </div>

            {/* Removed Carousel controls as per the requirement */}
        </div>
    );
};

export default Testimonial;
