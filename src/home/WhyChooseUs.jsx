import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { FiPlay, FiHome, FiBarChart2, FiBriefcase } from "react-icons/fi";

const WhyChooseUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px]">
      {/* Left Section - Image + Overlay + Button */}
      <div className="relative md:w-1/2 w-full h-[400px] md:h-auto">
        <img
          src="/images/meeting.jpg"
          alt="meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        <button
          onClick={() => setIsPlaying(true)}
          className={`absolute inset-0 flex flex-col items-center justify-center text-white z-10 transition-transform ${
            !isPlaying ? "animate-pulse" : ""
          }`}
        >
          <div className="bg-blue-500 hover:bg-blue-600 p-6 rounded-full shadow-lg">
            <FiPlay className="text-white text-3xl ml-1" />
          </div>
          <p className="mt-2 font-semibold text-lg">Get Introduction</p>
        </button>
      </div>

      {/* Right Section - Content */}
      <div className="bg-blue-500 text-white md:w-1/2 w-full px-8 py-10 flex flex-col justify-center">
        <p className="text-sm font-light mb-1">We are creative</p>
        <h2 className="text-3xl font-bold mb-6">Grow Your Business Grow</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FiHome className="text-white text-3xl mt-1" />
            <div>
              <h4 className="font-bold">Social & Public Sector Service</h4>
              <p className="text-sm">
                Our Company Established has been 1976. This is the number one corporate and business company in this world.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiBarChart2 className="text-white text-3xl mt-1" />
            <div>
              <h4 className="font-bold">Awesome Business Plan</h4>
              <p className="text-sm">
                Our Company Established has been 1976. This is the number one corporate and business company in this world.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FiBriefcase className="text-white text-3xl mt-1" />
            <div>
              <h4 className="font-bold">Friendly Work Environment</h4>
              <p className="text-sm">
                Our Company Established has been 1976. This is the number one corporate and business company in this world.
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8">
          <p className="font-bold mb-2">Follow Us:</p>
          <div className="flex gap-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-white text-blue-500 p-2 rounded hover:bg-gray-200 transition"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
