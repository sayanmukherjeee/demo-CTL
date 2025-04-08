import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these with your actual image file names, placed in public/img folder
const brandLogos = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
];

const BrandSection = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="max-w-4xlm mx-auto px-4">
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="bg-white flex items-center justify-center h-24 shadow-sm">
                <img
                  src={logo}
                  alt={`brand-${index + 1}`}
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandSection;
