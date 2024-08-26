import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";

const RoversPanoromic = () => {
  const [roverPanoPhotos, setRoverPhotosPano] = useState([]);
  
  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const photos = await NASADataService.getRoverPanoromicPhotos(); //
      setRoverPhotosPano(photos);
    };
    fetchRoverPhotos();
  }, []);

  return (
    <div>
      <h1>Panoromic Rover Photos</h1>
      <ul>
        {roverPanoPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.img_src} alt={photo.camera.full_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoversPanoromic;
