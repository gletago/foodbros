import { useEffect, useRef } from 'react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  lat: number;
  lng: number;
}

interface RestaurantMapProps {
  restaurants: Restaurant[];
  apiKey: string;
}

export default function RestaurantMap({ restaurants, apiKey }: RestaurantMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapLoaded = useGoogleMaps(apiKey);

  useEffect(() => {
    if (mapLoaded && mapRef.current && window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -30.5595, lng: 22.9375 }, // Centered on South Africa
        zoom: 6,
      });

      // Add markers for each restaurant
      restaurants.forEach((restaurant) => {
        new window.google.maps.Marker({
          position: { lat: restaurant.lat, lng: restaurant.lng },
          map: map,
          title: restaurant.name,
        });
      });
    }
  }, [mapLoaded, restaurants]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}