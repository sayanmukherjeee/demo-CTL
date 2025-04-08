import React from "react";

function Carousel() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/group-colleagues-engaging-discussion-during-600nw-2461746317.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 py-24 relative z-10 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make your creative business <br /> Corporate site.
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            incididunt, lectus a eros sodales magna.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-900 transition-colors duration-500">
              Contact Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded text-white font-semibold hover:bg-white hover:text-black transition-colors duration-500">
              More Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
