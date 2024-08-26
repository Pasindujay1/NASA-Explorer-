import PropTypes from "prop-types";
import HomePageVideo from "../assets/video/HomePageVideo.mp4";

const VideoWrapper = ({ children, url }) => {
  return (
    <div className='relative h-screen'>
      <video
        className='absolute inset-0 w-full object-cover'
        autoPlay
        loop
        muted

      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='absolute inset-0 z-20'>{children}</div>
    </div>
  );
};

export default VideoWrapper;

VideoWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};
