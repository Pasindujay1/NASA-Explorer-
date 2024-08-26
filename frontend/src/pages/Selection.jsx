import React from 'react';
import { useNavigate } from "react-router-dom";

import VideoWrapper from '../components/VideoWrapper';
import HomePageVideo from "../assets/video/HomePageVideo.mp4"
import astronautImage from '../assets/images/astronaut.png';

const Selection = () => {
  const navigate = useNavigate();

  const handleExplore = (path) => {
    navigate(path);
  };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mt-12 mb-6">Welcome to NASAVERSE</h1>
        <p className="text-lg mb-12">A Multisensory Exploration</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg">
          {/* Card 1: Mars Rover Photos */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Mars Rover Photos</h2>
            <p className="text-gray-300 mb-4">
              Explore the latest photos captured by Mars rovers.
            </p>
            <button
              onClick={() => handleExplore("/Rovers")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Launch
            </button>
          </div>

          {/* Card 2: Earth */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Earth</h2>
            <p className="text-gray-300 mb-4">
              Unlock the beauty of our planet with satellite imagery.
            </p>
            <button
              onClick={() => handleExplore("/EarthImages")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Launch
            </button>
          </div>

          {/* Card 3: Astronomy */}
          <div className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Astronomy</h2>
            <p className="text-gray-300 mb-4">
              Discover the Astronomy Picture of the Day.
            </p>
            <button
              onClick={() => handleExplore("/Astronomy")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Launch
            </button>
          </div>
        </div>
      </div>
    </VideoWrapper>
  );
};

export default Selection;
