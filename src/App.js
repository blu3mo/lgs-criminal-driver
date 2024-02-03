import React, { useState } from 'react';
import MapComponent from './MapComponent'; // Adjust import paths as necessary
import useDisplayRoute from './useDisplayRoute'; // Adjust import paths as necessary

function App() {
  const { displayRoute, directionsResponse, error } = useDisplayRoute();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleShowRoute = () => {
    displayRoute(start, end);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Start"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={handleShowRoute}>Show Route</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <MapComponent directionsResponse={directionsResponse} />
    </div>
  );
}

export default App;
