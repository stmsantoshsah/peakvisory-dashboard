import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a192f] text-white">
      {/* Animated 404 */}
      <div className="relative flex justify-center items-center">
        <h1 className="text-[120px] font-bold tracking-widest animate-pulse">404</h1>
        {/* Orbiting Dots */}
        <div className="orbit">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <p className="text-lg text-gray-400 mt-4">Looks like you're lost in space!</p>
      
      {/* Back to Home Button */}
      <Link to="/" className="mt-6 px-6 py-3 bg-primary rounded-lg text-white hover:bg-secondary transition">
        Return Home
      </Link>
    </div>
  );
};

export default PageNotFound;
