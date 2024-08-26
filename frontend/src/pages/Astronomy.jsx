import React, { useEffect, useState } from 'react';
import NASADataService from '../services/NASADataService.js';
import VideoWrapper from '../components/VideoWrapper.jsx';
import HomePageVideo from '../assets/video/HomePageVideo.mp4';
import Loading from '../components/Loading.jsx';
import Typewriter from 'typewriter-effect'; // Import typewriter-effect

const Astronomy = () => {
  const [picOfTheDay, setPicOfTheDay] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [loading, setLoading] = useState(false);
  



  useEffect(() => {
    setLoading(true);

    const fetchRoverPhotos = async () => {
      try {
        const photos = await NASADataService.getAstronomyPhotos();
        setPicOfTheDay(photos);
        setShowDate(true); // Trigger to show the date after fetching data
      } catch (error) {
        console.error('Error fetching rover photos:', error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchRoverPhotos();
  }, []);

  const handleTypewriterComplete = () => {
    // Handle any actions after Typewriter completes typing (if needed)
  };

  return (
    <VideoWrapper url={HomePageVideo}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white mt-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {picOfTheDay ? picOfTheDay.title : ''}
        </h1>
        {picOfTheDay && showDate && (
          <h2 className="text-xl text-white mb-4 text-center">
            Date: {' '}
            <Typewriter
              options={{
                strings: [picOfTheDay.date],
                autoStart: true,
                loop: true,
                cursor: '_',
              }}
            />
          </h2>
        )}
        {picOfTheDay && !showDate && (
          <h2 className="text-xl text-white mb-4 text-center">
            Date: {picOfTheDay.date}
          </h2>
        )}
      </div>

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {picOfTheDay ? (
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-8">
            <div className="lg:w-1/2 lg:mr-8 mb-4">
              <img
                src={picOfTheDay.url}
                alt={picOfTheDay.title}
                className="w-full rounded-lg shadow-lg border-2 border-white"
              />
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <p className="text-lg text-white leading-relaxed">
                {picOfTheDay.explanation}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        )}
      </div>
    </VideoWrapper>
  );
};

export default Astronomy;
