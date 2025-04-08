import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Header from "./home/header";
import Carousel from "./home/carausel";
import Services from "./home/services";
import StatsSection from "./home/StatsSection";
import ServicesCardsSection from "./home/ServicesCardsSection";
import Portfolio from "./home/Portfolio";
import WhyChooseUs from "./home/WhyChooseUs";
import NewsUpdateSlider from "./home/NewsUpdateSlider";
import ClientsSection from "./home/ClientsSection";
import BrandSection from "./home/BrandSection";
import Footer from "./home/Footer";

function App() {
  return (
    <div className="relative">
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 1a1 1 0 0 0-1 1v3a1 1 0 0 0 .76.97l2.13.53a.5.5 0 0 1 .38.48v2.14a.5.5 0 0 1-.38.48l-2.13.53A1 1 0 0 0 2 12v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .97-.76l.53-2.13a.5.5 0 0 1 .48-.38h2.14a.5.5 0 0 1 .48.38l.53 2.13A1 1 0 0 0 12 16h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-.76-.97l-2.13-.53a.5.5 0 0 1-.38-.48V7.76a.5.5 0 0 1 .38-.48l2.13-.53A1 1 0 0 0 16 6V3a1 1 0 0 0-1-1H3z" />
            </svg>
            +888 555 756
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.43 10.74L12 3 9.57 10.74 2 12l7.57 1.26L12 20l2.43-6.74L22 12z" />
            </svg>
            Corpas for your WORK.
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 3h20v18H2z" fill="none" />
              <path d="M20 5v14H4V5h16m0-2H4a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2z" />
              <path d="M18 8l-6 5-6-5" />
            </svg>
            email@corpas.com
          </span>
        </div>
      </div>
      <Header />
      <Carousel />
      <Services />
      <StatsSection />
      <ServicesCardsSection />
      <Portfolio />
      <WhyChooseUs />
      <NewsUpdateSlider />
      <ClientsSection />
      <BrandSection/>
      <Footer/>
    </div>
  );
}

export default App;
