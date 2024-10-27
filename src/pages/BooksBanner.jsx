import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BooksBanner = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  // Array of messages to display in the banner
  const messages = [
    "Unlock Your Potential with Lots of Books!",
    "Join Thousands of Successful Readers Today!",
    "Boost Your Knowledge with In-Demand Resurces!",
    "Sign Up Now and Get Access to Purchage Books!",
    "Login Today and Start Reading Tomorrow!"
  ];

  // Function to switch messages every 3 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 3000);
    return () => clearInterval(messageInterval);
  }, [messages.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 text-white py-16 flex justify-center items-center text-center">
      <div className="max-w-4xl px-6 space-y-6">
        <h1 className="text-4xl font-bold mb-4">
          {messages[currentMessage]}
        </h1>
        <p className="text-lg">
          Take the next step in your reading journey with our comprehensive online book shop.
        </p>
        <Link to="/login">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Login Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BooksBanner;
