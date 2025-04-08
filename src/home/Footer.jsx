import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm">
          <p>Corpas Floor New World Tower Rang</p>
          <span className="hidden md:block text-gray-500">|</span>
          <p>dem@corpasumg.com</p>
          <span className="hidden md:block text-gray-500">|</span>
          <p>+888 555 756 349</p>
        </div>

        <h2 className="text-lg font-bold text-white">CORPAS</h2>

        <p className="text-xs text-gray-400">
          © corpas all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
