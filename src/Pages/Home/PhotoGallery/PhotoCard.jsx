// PhotoCard.js

import React from 'react';

const PhotoCard = ({ src, title }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={src} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">{title}</p>
        {/* Add more information or buttons as needed */}
      </div>
    </div>
  );
};

export default PhotoCard;
