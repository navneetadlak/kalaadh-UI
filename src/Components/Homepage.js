import React from "react";
const { useState, useEffect } = React;

const testimonials = [
  {
    text: "Pok pok flannel drinking vinegar, succulents lumbersexual XOXO artisan. Succulents tousled drinking vinegar, cardigan.",
    name: "Calvin Reeves",
    role: "Actor",
    image: "https://placehold.co/100x100",
  },
  {
    text: "Artisan direct trade, sustainable kombucha. Poke authentic, farm-to-table chia.",
    name: "Jane Doe",
    role: "Designer",
    image: "https://placehold.co/100x100",
  },
  {
    text: "Vegan ethical, biodiesel heirloom. Tumeric banh mi, kombucha sustainable.",
    name: "John Smith",
    role: "Musician",
    image: "https://placehold.co/100x100",
  },
];

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
       <div className="flex justify-center items-center min-h-screen w-full mt-14 bg-white p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full mx-6">
          <div className="relative">
            <img
              src="https://placehold.co/400x600"
              alt="Person wearing a button-up shirt"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white">
              <h2 className="md:text-3xl text-lg mb-4 text-center">Button Up <span className="hidden md:inline"><br /></span>Shirts</h2>
              <button className="bg-white text-black md:py-4 md:px-6 py-3 px-4">Buy Now</button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/400x600"
              alt="Person sitting and wearing a shirt"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white">
              <h2 className="md:text-3xl text-lg mb-4 text-center ">Choose <span className="hidden md:inline"><br /></span> your price</h2>
              <button className="bg-white text-black md:py-4 md:px-8 py-3 px-6 items-center">
                Choose<span className="hidden md:inline"><br /></span> Yours
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#C7AB62] text-white p-8">
            <h2 className="text-3xl mb-8">Clearance Sales</h2>
            <p className="mb-14 text-zinc-300">Up to 70% Off & Free Shipping</p>
            <button className="bg-white text-black py-4 px-6">
              Browse sales
            </button>
          </div>
        </div>
      </div>


      {/* best selling container */}
      <div className="container mx-auto py-12 px-24">
        <h1 className="text-3xl font-bold text-center mb-4">Best Selling</h1>
        <p className="text-center text-gray-500 mb-12">
          Bushwick blue bottle photo booth copper mug marfa craft beer pour-over
          swag subway tile organic <br /> cloud bread.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center items-center">
          <div className="relative">
            <img
              src="https://placehold.co/400x400"
              alt="Woman sitting on a chair holding a bag"
              className="w-full mb-4"
            />
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <i className="far fa-heart"></i>
            </button>
            <h2 className="text-lg font-medium">Cashmere Tank + Bag</h2>
            <p className="text-gray-500">$39.00 — $98.00</p>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/400x400"
              alt="Micro Form Bag"
              className="w-full mb-4"
            />
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <i className="far fa-heart"></i>
            </button>
            <h2 className="text-lg font-medium">Micro Form Bag</h2>
            <p className="text-gray-500">$98.00</p>
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/400x400"
              alt="Woman wearing a cashmere tank"
              className="w-full mb-4"
            />
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <i className="far fa-heart"></i>
            </button>
            <h2 className="text-lg font-medium">Cashmere Tank</h2>
            <p className="text-gray-500">$39.00</p>
          </div>
        </div>
      </div>

      {/* testimonials secction */}
      <section className="bg-beige-100 text-center py-16">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="mt-4">{testimonials[currentTestimonial].text}</p>
        <div className="mt-8">
          <img
            src={testimonials[currentTestimonial].image}
            alt={`Portrait of ${testimonials[currentTestimonial].name}`}
            className="rounded-full mx-auto"
          />
          <p className="mt-4 font-bold">
            {testimonials[currentTestimonial].name}
          </p>
          <p>{testimonials[currentTestimonial].role}</p>
        </div>
      </section>

      {/* trending outfit section */}
      <section className="text-center py-16 px-4 md:px-8 ">
        <h2 className="text-2xl font-bold">Trending Outfits</h2>
        <p className="mt-4">
          Intelligentsia migas next level 90s woke ramps. Glossier vape celiac
          tumeric keffiyeh.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.1 md:gap-1 mt-8 place-items-center">
          <div className="text-left">
            <img src="https://placehold.co/200x200" alt="Cashmere Tank + Bag" />
            <p className="mt-2">Cashmere Tank + Bag</p>
            <p>$39.00 — $98.00</p>
          </div>
          <div className="text-left">
            <img src="https://placehold.co/200x200" alt="Micro Form Bag" />
            <p className="mt-2">Micro Form Bag</p>
            <p>$98.00</p>
          </div>
          <div className="text-left">
            <img src="https://placehold.co/200x200" alt="Cashmere Tank" />
            <p className="mt-2">Cashmere Tank</p>
            <p>$39.00</p>
          </div>
          <div className="text-left">
            <img src="https://placehold.co/200x200" alt="Hang Out Hoodie" />
            <p className="mt-2">Hang Out Hoodie</p>
            <p>
              <span className="line-through">$48.00</span>{" "}
              <span className="text-red-500">$36.00</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
