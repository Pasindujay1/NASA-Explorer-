import React, { useState } from 'react';
import NASADataService from '../services/NASADataService.js';
import VideoWrapper from '../components/VideoWrapper.jsx';
import HomePageVideo from '../assets/video/earth.mp4';
import Loading from '../components/Loading.jsx';

const EarthImages = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [date, setDate] = useState("2018-01-01");

  const handleFetchImage = async () => {
    setLoading(true);
    try {
      const photos = await NASADataService.getEarthImages(date);
      setImageUrl(photos.url);
    } catch (error) {
      console.error('Error fetching Earth images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="flex flex-col items-center justify h-screen text-white mt-10">
        <h1 className="text-3xl font-bold mb-4">Explore Earth</h1>
        <div className="mb-6 flex items-center">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 text-black rounded-md px-4 py-2 mr-4 focus:outline-none"
            style={{ minWidth: '200px' }}
          />
          <button
            onClick={handleFetchImage}
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none"
          >
            Fetch Image
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          imageUrl && (
            <div className="flex items-center justify-center">
              <img
                src={imageUrl}
                alt="Earth"
                className="max-h-80 md:max-h-96 border p-2 bg-white rounded-md shadow-md object-contain"
                style={{ borderWidth: '2px', borderColor: '#ccc' }} // Customize border style
              />
            </div>
          )
        )}
      </div>
    </VideoWrapper>
  );
};

export default EarthImages;
