import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const CACHE_KEY = 'landingImage';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

function Slider() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      // 1. Retrieve cached data from localStorage
      const cachedData = localStorage.getItem(CACHE_KEY);
      let parsedData = null;

      // 2. Safely parse JSON
      try {
        parsedData = cachedData ? JSON.parse(cachedData) : null;
      } catch (error) {
        console.warn('Invalid cache format, clearing cache.');
        localStorage.removeItem(CACHE_KEY);
      }

      // 3. Check if cache is still valid
      const isCacheValid =
        parsedData && Date.now() - parsedData.timestamp < CACHE_EXPIRY;

      if (isCacheValid) {
        // Use cached image
        setImage(parsedData.url);
      } else {
        // Fetch from Firestore and update cache
        try {
          const querySnapshot = await getDocs(collection(db, 'Landing'));
          const imageList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          const imageUrl = imageList[0]?.image;
          if (imageUrl) {
            setImage(imageUrl);
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                url: imageUrl,
                timestamp: Date.now(),
              })
            );
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="h-full absolute inset-0 bg-cover bg-center">
        {image ? (
          <img
            rel='preload'
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://res.cloudinary.com/dtxiapgsx/image/upload/v1739553158/landing_gkbd9j.jpg"
            alt="Landing"
          />
        ) : (
          <p className="text-center text-gray-500">Loading image...</p>
        )}
      </div>
    </div>
  );
}

export default Slider;
