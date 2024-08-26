import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import VideoWrapper from '../components/VideoWrapper';
import HomePageVideo from "../assets/video/HomePageVideo.mp4"
import astronautImage from '../assets/images/astronaut.png';
const Homepage = () => {
  const navigate = useNavigate();


  const handleExplore = (path) => {
    navigate(path);
  };

  return(
    <>
      <VideoWrapper url ={HomePageVideo}>

      <div className="text-center">
      <h1 className="text-6xl font-bold text-white mt-3 mb-0">NASAVERSE</h1>
      {/* <p className="text-sm text-white px-4 mb-10">A MULTISENSORY EXPLORATION</p> */}
      <div className="max-w-lg mx-auto p-4  bg-opacity-30 rounded-lg">
            <p className="text-white text-lg leading-relaxed text-center">
              Welcome to NASAVERSE, a captivating journey through the realms of space exploration.
            </p>
          </div>
   </div>
   <div className="flex justify-center mt-0">
          <img
            src={astronautImage}
            alt="Astronaut"
            className="mx-auto"
            style={{ maxWidth: "300px" }}
          />
        </div>

    <div className="flex justify-center mt-4">
    <button

onClick={() => handleExplore("/Selection")}

            type="button"
            className="text-white font-medium text-lg px-5 py-2.5 rounded-full bg-black bg-opacity-10 border border-white rounded-full  hover:bg-opacity-40 focus:outline-none focus:ring-4 focus:ring-white"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Explore the NASAVERSE
          </button>
        </div>


  
      </VideoWrapper>
    </>
  )

};

export default Homepage;
