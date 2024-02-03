import { useState, useCallback } from 'react';

const useDisplayRoute = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [error, setError] = useState(null);

  const displayRoute = useCallback(async (start, end) => {
    if (!start || !end) {
      setError('Start and end locations are required.');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          setError(null);
        } else {
          setError('Failed to find the route. Please try again.');
        }
      }
    );
  }, []);

  return { displayRoute, directionsResponse, error };
};

export default useDisplayRoute;
