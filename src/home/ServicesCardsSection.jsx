import React from "react";

const ServicesCardsSection = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod these tempor.",
      icon: (
        <path d="M3 4h18v2H3zm2 4h14v12H5z" />
      ),
    },
    {
      title: "Graphics Design",
      description:
        "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod these tempor.",
      icon: (
        <path d="M9 2h6l1 3h3a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h3l1-3zM12 9.5A3.5 3.5 0 1012 16a3.5 3.5 0 000-7z" />
      ),
    },
    {
      title: "Email Marketing",
      description:
        "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod these tempor.",
      icon: (
        <path d="M2 4h20v16H2z M22 4l-10 9L2 4" />
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md"
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0" />

            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <svg
                className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {service.icon}
              </svg>
              <h3 className="text-xl font-bold text-black group-hover:text-white mt-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white mt-2 transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Bottom blue border */}
            <div className="w-full h-[3px] bg-blue-500 group-hover:bg-white transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCardsSection;
