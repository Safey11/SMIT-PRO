import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import pic1 from '../assets/pic1.json';
import pic2 from '../assets/pic2.webp';
import AOS from 'aos'; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS CSS

const LeftHero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pic1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center justify-between w-full mb-20">
            {/* Text block */}
            <h1 data-aos="fade-right" className="sm:text-9xl text-4xl font-bold title-font text-red-500 drop-shadow-lg">
              Smit Services
            </h1>

            {/* Lottie Animation */}
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Begin Gallery Items */}
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div
                  className="flex relative transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  data-aos="zoom-in"
                >
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
                    src={pic2}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-xl font-semibold text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-4">
                      Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                    </p>
                    <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="flex justify-center mt-12">
            <button className="bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-200 shadow-lg">
              Join Us Today!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftHero;
