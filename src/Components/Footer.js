import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-12 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Store Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQ’s
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">STORE</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Speakers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">FOLLOW US</h3>
            <p className="text-gray-600 mb-4">
              And get Free Shipping on all your orders!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-gray-900 text-2xl font-semibold mb-4">
            Sign up now & get 10% off
          </h2>
          <p className="text-gray-600 mb-4">
            Be the first to know about our new arrivals and exclusive offers.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="bg-gray-900 text-white p-2 rounded-r-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
