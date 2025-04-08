import React, { useState } from "react";

const portfolioData = {
  "All Work": [
    "/images/work1.jpg",
    "/images/work2.jpg",
    "/images/work3.jpg",
    "/images/work4.jpg",
    "/images/work5.jpg",
    "/images/work6.jpg",
    "/images/work8.jpg",
  ],
  Branding: ["/images/work6.jpg", "/images/work4.jpg"],
  Business: ["/images/work2.jpg", "/images/work1.jpg"],
  News: ["/images/work8.jpg"],
  Photography: ["/images/work8.jpg", "/images/work3.jpg"],
  Website: ["/images/work5.jpg", "/images/work6.jpg"],
};

const categories = Object.keys(portfolioData);

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Work");

  return (
    <div className="text-center py-12 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold mb-2 text-gray-800">Our Portfolio</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
        Explore our creative works across various categories. Click to filter and discover more.
      </p>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-600 border-gray-300 hover:bg-blue-50 hover:border-blue-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {portfolioData[activeCategory].map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={img}
                alt={`portfolio-${index}`}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] scale-100 group-hover:scale-90"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <h3 className="text-white text-xl font-bold mb-3">Product {index + 1}</h3>
              <p className="text-gray-200 text-sm mb-4">Category: {activeCategory}</p>
              <div className="flex gap-3">
                <button className="bg-white/10 backdrop-blur-lg text-white px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  View Demo
                </button>
                <button className="bg-blue-600/90 backdrop-blur-lg text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;