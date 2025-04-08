import React from "react";

function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide top-notch solutions to help you grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Social & Public Sector Service",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              icon: (
                <path d="M3 7v10c0 1.1.9 2 2 2h3v-4h8v4h3c1.1 0 2-.9 2-2V7H3z M16 3h-4l-1 4h6l-1-4z" />
              ),
            },
            {
              title: "24/7 Customer Support",
              desc: "We offer round-the-clock support to assist you.",
              icon: <path d="M12 1v22m11-11H1" />,
            },
            {
              title: "Marketing Plan & Meetings",
              desc: "Comprehensive strategies to boost your business growth.",
              icon: (
                <path d="M19 10c1.11 0 2 .89 2 2s-.89 2-2 2h-1v2h-2v-2H8v2H6v-2H5c-1.11 0-2-.89-2-2s.89-2 2-2h1V8h2v2h8V8h2v2h1z" />
              ),
            },
            {
              title: "Social Media Marketing",
              desc: "Enhance your online presence with expert social media strategies.",
              icon: (
                <>
                  <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                  <path d="M9 7h6M9 11h6M9 15h6" />
                </>
              ),
            },
            {
              title: "Mobile App Design",
              desc: "Sleek and user-friendly mobile app interfaces.",
              icon: (
                <>
                  <path d="M2 7h20v4H2z" />
                  <path d="M2 13h20v4H2z" />
                </>
              ),
            },
            {
              title: "Professional Achievements",
              desc: "Celebrating success with award-winning service quality.",
              icon: (
                <path d="M10 2h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 18h4v4h-4z" />
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg transition duration-300 group flex items-start space-x-4"
            >
              <div className="flex-shrink-0 border-2 border-blue-500 rounded-md p-3 transition-all duration-300 group-hover:bg-blue-500">
                <svg
                  className="w-10 h-10 text-blue-500 transition-colors duration-300 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2">{service.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
