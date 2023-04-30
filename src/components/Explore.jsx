import { useState, useEffect } from 'react';

import axios from 'axios';

function Explore() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          count: 20, // Number of images to fetch
          client_id: 'p_WPPYkbJVCF8oZPE_6g3wX-rmXCFyzEHrRq_gyNa4U',
        },
      })
      .then((res) => {
        setImage(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div id="explore-page" className="flex flex-wrap flex-row ">
        {image.map((e) => (
          <img
            src={e.urls.regular}
            alt="noting"
            width={400}
            height={300}
            key={e.id}
            className="p-2 "
          />
        ))}
      </div>
      <div id="loader"></div>
    </>
  );
}

export default Explore;
