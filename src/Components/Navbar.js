import React, { useState, useEffect } from 'react'

const images = [
    "https://placehold.co/1920x1080?text=Image+1",
    "https://placehold.co/1920x1080?text=Image+2",
    "https://placehold.co/1920x1080?text=Image+3"
];

const Navbar = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  return (
    <div className="relative h-screen">
                    <div className="absolute inset-0 z-0">
                        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-[#282828] text-white flex justify-between items-center px-4 py-2 text-sm absolute top-0 left-0 right-0 z-10">
                        <div className="flex space-x-6 items-center ml-6">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <a href="#" className="hover:underline">About Us</a>
                            <a href="#" className="hover:underline">Wishlist</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>English</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-4 py-4 absolute top-12 left-5 right-5 z-10">
                        <div className="flex items-center space-x-4 text-[#444444]">
                            <i className="fas fa-bars text-2xl"></i>
                            <a href="#" className="hover:underline">Main</a>
                            <a href="#" className="hover:underline">Shop</a>
                            <a href="#" className="hover:underline">Product</a>
                            <a href="#" className="hover:underline">Pages</a>
                            <a href="#" className="hover:underline">Journal</a>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <span className="text-4xl font-bold text-[#444444]">KALAADH</span>
                        </div>
                        <div className="flex flex-row items-center space-x-6 text-[#444444]">
                            <a href="#" className=" hover:underline">Login</a>
                            <i className="fas fa-search "></i>
                            <i className="far fa-heart"></i>
                            <i className='fas fa-shopping-bag mr-0'></i>
                            <div className="relative">
                                <span className="right-0 left-0 bg-yellow-500 text-black text-xs rounded-full px-1">1</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex justify-between items-center px-4 z-10">
                        <button onClick={handlePrev} className="text-grey-900 text-2xl">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button onClick={handleNext} className="text-grey-100 text-2xl">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
)
}

export default Navbar