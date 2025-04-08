import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsUpdateSlider = () => {
  const cards = [
    {
      category: "News",
      title: "How will you know success when it shows",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news1.jpg",
    },
    {
      category: "Photography",
      title: "Where people develop the own potential",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news2.jpg",
    },
    {
      category: "Branding",
      title: "Which Corporate tool is to choose?",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news3.jpg",
    },
    {
      category: "News",
      title: "How to plan your portfolio content strategy?",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news4.jpg",
    },
    {
      category: "Photography",
      title: "Photography tips for mesmerizing scenes",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news5.jpg",
    },
    {
      category: "Branding",
      title: "Building your brand with authenticity",
      description:
        "Our offices are located on the traditional, unceded photo booth stumptown to banksy.",
      admin: "Admin",
      date: "11 August, 2024",
      image: "/images/news6.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">News & Update</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-3">
              <div className="bg-white shadow-md rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-60 object-cover transform transition duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 transition-all duration-500" />
                  <span className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded cursor-pointer">
                    {card.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-500 transition">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 space-x-2">
                    <div className="flex items-center cursor-pointer space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                      <span>{card.admin}</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span>{card.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsUpdateSlider;
