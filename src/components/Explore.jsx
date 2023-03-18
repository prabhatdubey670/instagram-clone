import React, { useState, useEffect } from 'react';

export default function Explore() {
  const [res, setRes] = useState([]);

  // fetched data from unsplash
  const fetchRequest = async () => {
    try {
      const response = await fetch(
        // eslint-disable-next-line comma-dangle
        'https://api.unsplash.com/search/photos?client_id=p_WPPYkbJVCF8oZPE_6g3wX-rmXCFyzEHrRq_gyNa4U'
      );
      const data = await response.json();
      const result = data.results;
      setRes(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div>
      <div className="imgbox">
        {/* map data here with image */}
        {res.map((e) => (
          <img src={e.urls.small} alt={e.alt_description} key={e.id} />
        ))}
      </div>
    </div>
  );
}
