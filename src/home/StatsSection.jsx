import React from "react";
import CountUp from "react-countup";

function StatsSection() {
  // Replace this URL with your actual background image.
  const backgroundImageUrl =
    "https://t3.ftcdn.net/jpg/04/78/80/14/360_F_478801437_L6euBIK8dEm10QpPjb6DuehtLSJRSnBg.jpg";

  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Dark Overlay / Gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="relative border border-gray-400 p-8 rounded text-center group transition-all duration-500 ease-in-out hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* Example icon path – change as needed */}
                <path d="M12 2a9 9 0 019 9v4a4 4 0 01-4 4h-3v2H10v-2H7a4 4 0 01-4-4v-4a9 9 0 019-9z" />
              </svg>
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white">
              Happy Customers
            </h3>
            {/* Stat */}
            <p className="text-3xl font-bold text-white group-hover:text-white">
              <CountUp end={130} duration={2} /> +
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border border-gray-400 p-8 rounded text-center group transition-all duration-500 ease-in-out hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* Example icon path */}
                <path d="M12 1v22m11-11H1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white">
              Employer Solutions
            </h3>
            <p className="text-3xl font-bold text-white group-hover:text-white">
              <CountUp end={60} duration={2} /> +
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative border border-gray-400 p-8 rounded text-center group transition-all duration-500 ease-in-out hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* Example icon path */}
                <path d="M2 12l9 6 11-10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white">
              Online Support
            </h3>
            <p className="text-3xl font-bold text-white group-hover:text-white">
              <CountUp end={30} duration={2} /> +
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative border border-gray-400 p-8 rounded text-center group transition-all duration-500 ease-in-out hover:bg-blue-600 hover:border-blue-600 cursor-pointer">
            <div className="mb-4 flex justify-center">
              <svg
                className="w-12 h-12 text-white group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {/* Example icon path */}
                <path d="M12 2h4v4h-4zM4 10h4v4H4zM16 10h4v4h-4zM10 18h4v4h-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white">
              Project Completed
            </h3>
            <p className="text-3xl font-bold text-white group-hover:text-white">
              <CountUp end={33} duration={2} /> +
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
