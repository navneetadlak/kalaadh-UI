// import React, { useState, useEffect } from 'react';

const SideMenu = ({ isOpen, onClose }) => {

    return (
        <div
            className={`fixed inset-0 z-50 bg-white transition-transform transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex h-screen flex-col md:flex-row">
                {/* Left side for menu */}
                <div className="w-full md:w-1/4 p-6 border-r border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <button className="text-2xl" onClick={onClose}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <nav className="space-y-4">
                        <a href="#" className="block text-lg font-semibold">
                            MAIN
                        </a>
                        <a href="#" className="block text-lg">
                            SHOP{' '}
                            <i className="fas fa-chevron-right float-right"></i>
                        </a>
                        <a href="#" className="block text-lg">
                            PRODUCT{' '}
                            <i className="fas fa-chevron-right float-right"></i>
                        </a>
                        <a href="#" className="block text-lg">
                            PAGES{' '}
                            <i className="fas fa-chevron-right float-right"></i>
                        </a>
                        <a href="#" className="block text-lg">
                            JOURNAL{' '}
                            <i className="fas fa-chevron-right float-right"></i>
                        </a>
                    </nav>

                    {/* Mobile Footer (for language and social icons) */}
                    <div className="mt-8 md:mt-auto">
                        <div className="flex items-center space-x-2 mb-6">
                            <span>Language</span>
                            <select className="border border-gray-300 rounded px-2 py-1">
                                <option>English</option>
                            </select>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-xl">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-xl">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-xl">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side for sub-menus (desktop only) */}
                <div className="hidden md:block w-3/4 p-8">
                    <div className="flex space-x-16">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">
                                HOME STYLES
                            </h2>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span>v1 — Classic</span>
                                    <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                        Default
                                    </span>
                                </li>
                                <li>v2 — Full Screen Slider</li>
                                <li>v3 — New Season</li>
                                <li>v4 — Product Landing</li>
                                <li>v5 — Featured Video</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">
                                GLOBAL OPTIONS
                            </h2>
                            <ul className="space-y-2">
                                <li>Page Load Transition</li>
                                <li>Modal Popup</li>
                                <li className="flex items-center">
                                    <span>Campaign Bar</span>
                                    <span className="ml-2 text-xs bg-gray-800 text-white px-2 py-1 rounded">
                                        Featured
                                    </span>
                                </li>
                                <li>Top Bar — Disabled</li>
                                <li>Header — Regular Width</li>
                                <li>Mobile/Full Menu — Dark</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">
                                HEADER LAYOUTS
                            </h2>
                            <ul className="space-y-2">
                                <li>Header v1</li>
                                <li>Header v2</li>
                                <li>Header v3</li>
                                <li>Header v4</li>
                                <li>Header v5</li>
                                <li>Header v6</li>
                                <li>Header v7</li>
                                <li>Header v8</li>
                                <li>Header v9</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-lg font-semibold mb-4">
                            OTHER DEMOS
                        </h2>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://placehold.co/200x150"
                                alt="Screenshot of a demo website"
                                className="border border-gray-300 rounded"
                            />
                            <div>
                                <span>Decoration</span>
                                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                    Demo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;