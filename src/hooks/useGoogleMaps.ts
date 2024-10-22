import { useState, useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

let isLoading = false;
let isLoaded = false;

export function useGoogleMaps(apiKey: string) {
  const [mapLoaded, setMapLoaded] = useState(isLoaded);

  useEffect(() => {
    if (isLoaded) {
      setMapLoaded(true);
      return;
    }

    if (isLoading) {
      return;
    }

    isLoading = true;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      isLoaded = true;
      setMapLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      // We don't remove the script or delete window.initMap to keep the API loaded
    };
  }, [apiKey]);

  return mapLoaded;
}