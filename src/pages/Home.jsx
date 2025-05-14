// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Welcome to Hostel Management System 🏠</h1>
        <p className="text-xl mb-8 font-medium">
          Streamline room allocations, manage billing, track maintenance, and keep everything in sync — 
          all in one modern platform.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-black bg-opacity-20 border border-white font-semibold rounded-full hover:bg-opacity-30 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
