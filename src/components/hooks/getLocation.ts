import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null,
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        error => {
          console.error('Ошибка геолокации:', error.message);
        },
      );
    } else {
      console.error('Геолокация не поддерживается');
    }
  }, []);

  return location;
};

export default useGeolocation;
