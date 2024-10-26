import React from 'react';
import image from "./aboutuslogo.jpg"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          {/* Owner Image */}
          <div className="mb-8 md:mb-0">
            <img
              src={image} // Replace with the owner's image URL
              alt="Website Owner"
              className="w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-lg object-cover"
            />
          </div>

          {/* Owner Details */}
          <div className="text-center md:text-left max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h3>
            <p className="text-lg text-gray-600 mb-4">
              John is a passionate web developer with over 10 years of experience in creating beautiful and functional web applications. He loves turning complex problems into simple, intuitive designs. When he's not coding, you'll find him exploring new tech or enjoying the outdoors.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
