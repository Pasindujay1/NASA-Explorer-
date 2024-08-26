import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoWrapper from '../../components/VideoWrapper';
import HomePageVideo from "../../assets/video/HomePageVideo.mp4"
import NASADataService from '../../services/NASADataService.js';
import Loading from '../../components/Loading'; // Import the Loading component

const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const photos = await NASADataService.getRoverPhotos();
        setRoverPhotos(photos.slice(0, 3)); // Display only the first 3 photos
      } catch (error) {
        console.error("Error fetching rover photos:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    fetchRoverPhotos();
  }, []);

  const handleExplore = (path) => {
    navigate(path);
  };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mt-12 mb-6">Curiosity Rover Photos</h1>
        <p className="mb-4">Images taken from the NASA Curiosity rover on Mars:</p>
        
        {/* Display Loading component when loading is true */}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-lg">
            {roverPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-4"
              >
                <img
                  src={photo.img_src}
                  alt={photo.camera.full_name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

<button
  onClick={() => window.open("https://science.nasa.gov/mission/msl-curiosity/", "_blank")}
  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
>
  Explore more about Curiosity
</button>

      </div>
    </VideoWrapper>
  );
};

export default Rovers;
