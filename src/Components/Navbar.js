import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";

const images = [
  "https://placehold.co/1920x1080?text=Image+1",
  "https://placehold.co/1920x1080?text=Image+2",
  "https://placehold.co/1920x1080?text=Image+3",
];

const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Upper Navbar - Hidden on mobile */}
      <div className="bg-[#282828] text-white flex justify-between items-center px-4 py-2 text-sm absolute top-0 left-0 right-0 z-20 hidden md:flex">
        <div className="flex space-x-6 items-center ml-6">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Wishlist
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span>English</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      {/* Main Navigation Bar - Responsive for mobile */}
    

<div
  className={`fixed flex justify-between items-center px-4 py-4 top-0 left-0 right-0 z-30 transition-all duration-300
      ${isScrolled ? "bg-white shadow-lg" : "bg-opacity-50"}
      ${isScrolled ? "md:top-0" : "md:top-[50px]"}`}
>


        <div className="flex items-center space-x-4 text-[#444444] ml-4">
          {/* Menu Button */}
          <button onClick={toggleMenu} className="text-2xl cursor-pointer z-40">
            <i className="fas fa-bars"></i>
          </button>
          <a href="#" className="hover:underline hidden md:block">
            Main
          </a>
          <a href="#" className="hover:underline hidden md:block">
            Shop
          </a>
          <a href="#" className="hover:underline hidden md:block">
            Product
          </a>
          <a href="#" className="hover:underline hidden md:block">
            Pages
          </a>
          <a href="#" className="hover:underline hidden md:block">
            Journal
          </a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span
            className={`text-4xl font-bold ${
              isScrolled ? "text-black" : "text-[#444444]"
            }`}
          >
            KALAADH
          </span>
        </div>
        <div className="flex items-center space-x-6 text-[#444444]">
          <a href="#" className="hover:underline hidden md:block">
            Login
          </a>
          <div className="hidden md:block">
            <i className="fas fa-search hidden md:block"></i>
          </div>
          <div className="hidden md:block">
            <i className="far fa-heart hidden md:block"></i>
            {/* <i className='fas fa-shopping-bag mr-0'></i> */}
          </div>

          <i
            className={`fas fa-shopping-bag ${
              isScrolled ? "text-black" : "text-[#444444]"
            }`}
          ></i>
          <div className="relative">
            <span className="right-0 left-0 bg-yellow-500 text-black text-xs rounded-full px-1 hidden md:block">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Image navigation buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4 z-20">
        <button onClick={handlePrev} className="text-grey-900 text-2xl z-40">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button onClick={handleNext} className="text-grey-100 text-2xl z-40">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
};

export default Navbar;
