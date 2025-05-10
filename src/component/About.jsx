import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-zinc-700 to-black text-white min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="flex cursor-pointer items-center text-sm text-gray-300 hover:text-white transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Discover the story behind Film Inventory, your ultimate destination for movies, TV shows, and celebrity insights.
        </p>
      </header>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300">
            At Film Inventory, we aim to provide a seamless and engaging platform for movie enthusiasts to explore trending content, learn about their favorite celebrities, and stay updated with the latest in entertainment.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h2>
          <p className="text-gray-300">
            To become the go-to platform for entertainment lovers worldwide, offering a rich and immersive experience through cutting-edge design and technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
     
      {/* Footer Section */}
      <footer className="py-8 text-center text-gray-500">
        <p>&copy; 2025 Film Inventory. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
