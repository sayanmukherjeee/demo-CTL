import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mahin Door",
      role: "Manager",
      image: "https://www.marketing91.com/wp-content/uploads/2020/11/Customer-Satisfaction.jpg",
      text: `Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
      rating: 5,
      highlight: "Excellent!",
    },
    {
      id: 2,
      name: "Asif Hasan",
      role: "Customer",
      image: "https://www.marketing91.com/wp-content/uploads/2020/11/Customer-Satisfaction.jpg",
      text: `Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
      rating: 5,
      highlight: "Excellent!",
    },
    {
      id: 3,
      name: "Rashed Khan",
      role: "CEO",
      image: "https://www.marketing91.com/wp-content/uploads/2020/11/Customer-Satisfaction.jpg",
      text: `Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
      rating: 5,
      highlight: "Outstanding!",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Marketing Head",
      image: "https://www.marketing91.com/wp-content/uploads/2020/11/Customer-Satisfaction.jpg",
      text: `Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
      rating: 5,
      highlight: "Amazing!",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url('https://www.smartsheet.com/sites/default/files/2020-07/ic-og-ClientManagement-Twitter.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Clients</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Slider */}
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-4">
              {/* Testimonial card */}
              <div className="bg-black bg-opacity-70 text-white rounded-lg p-8 h-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Profile Image */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="flex-1 text-left">
                    {/* Name */}
                    <h3 className="text-xl font-bold">{t.name}</h3>
            
                    {/* Role/Profession under Name */}
                    <p className="text-blue-400 text-sm font-semibold mb-3">{t.role}</p>
            
                    {/* Testimonial Text */}
                    <p className="text-gray-200 leading-relaxed mb-3">
                      {t.text}
                    </p>
            
                    {/* Rating & Highlight */}
                    <div className="flex items-center">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-blue-500 text-lg mr-1">
                          ★
                        </span>
                      ))}
                      <span className="text-blue-400 ml-2 text-sm italic font-semibold">
                        {t.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
