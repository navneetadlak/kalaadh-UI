import React from "react";

const Homepage = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full mx-48">
        <div className="relative">
          <img
            src="https://placehold.co/400x600"
            alt="Person wearing a button-up shirt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white">
            <h2 className="text-2xl mb-4">Button Up Shirts</h2>
            <button className="bg-white text-black py-2 px-4">Buy Now</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/400x600"
            alt="Person sitting and wearing a shirt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white">
            <h2 className="text-2xl mb-4">Choose your price</h2>
            <button className="bg-white text-black py-2 px-4">
              Choose Yours
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-yellow-600 text-white p-8">
          <h2 className="text-2xl mb-4">Clearance Sales</h2>
          <p className="mb-4">Up to 70% Off & Free Shipping</p>
          <button className="bg-white text-black py-2 px-4">
            Browse sales
          </button>
        </div>
      </div>
    </div>

    {/* best selling container */}
    <div className="container mx-auto py-12 px-24">
                    <h1 className="text-3xl font-bold text-center mb-4">Best Selling</h1>
                    <p className="text-center text-gray-500 mb-12">
                        Bushwick blue bottle photo booth copper mug marfa craft beer pour-over swag subway tile organic <br /> cloud bread.
                    </p>
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center items-center">
                        <div className="relative">
                            <img src="https://placehold.co/400x400" alt="Woman sitting on a chair holding a bag" className="w-full mb-4"/>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                                <i className="far fa-heart"></i>
                            </button>
                            <h2 className="text-lg font-medium">Cashmere Tank + Bag</h2>
                            <p className="text-gray-500">$39.00 — $98.00</p>
                        </div>
                        <div className="relative">
                            <img src="https://placehold.co/400x400" alt="Micro Form Bag" className="w-full mb-4"/>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                                <i className="far fa-heart"></i>
                            </button>
                            <h2 className="text-lg font-medium">Micro Form Bag</h2>
                            <p className="text-gray-500">$98.00</p>
                        </div>
                        <div className="relative">
                            <img src="https://placehold.co/400x400" alt="Woman wearing a cashmere tank" className="w-full mb-4"/>
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                                <i className="far fa-heart"></i>
                            </button>
                            <h2 className="text-lg font-medium">Cashmere Tank</h2>
                            <p className="text-gray-500">$39.00</p>
                        </div>
                    </div>
                </div>
</>
  );
};

export default Homepage;
