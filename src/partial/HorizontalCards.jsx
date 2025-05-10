import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const HorizontalCards = ({ horizontalImage }) => {
  const [mediaType, setMediaType] = useState({ value: 'all', label: 'All' });
  const [filteredImages, setFilteredImages] = useState(horizontalImage);
  const navigate = useNavigate();

  const mediaTypeOptions = [
    { value: 'all', label: 'All' },
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Shows' },
  ];

  const handleMediaTypeChange = (option) => {
    setMediaType(option);
  };

  useEffect(() => {
    // Filter images based on selected media type
    if (mediaType.value === 'all') {
      setFilteredImages(horizontalImage);
    } else {
      setFilteredImages(horizontalImage.filter(item => item.media_type === mediaType.value));
    }
  }, [mediaType, horizontalImage]);

  return (
    <div className="mt-8 w-full ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-2">Trending</h1>
        <Dropdown options={mediaTypeOptions} onSelect={handleMediaTypeChange} value={mediaType} />
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 w-max">
          {filteredImages.map((d, i) => (
            <div 
              key={i} 
              className="bg-zinc-800 cursor-pointer rounded-lg shadow-lg overflow-hidden flex-shrink-0" 
              style={{width: "200px"}}
              onClick={() => {
                const mediaType = d.media_type;
                if (mediaType === "person") {
                  navigate(`/details/person/${d.id}`);
                } else {
                  navigate(`/details/${mediaType}/${d.id}`);
                }
              }}
            >
              <img
                className="w-full h-40 object-cover"
                src={`https://image.tmdb.org/t/p/w500${
                  d.backdrop_path || d.poster_path
                }`}
                alt=""
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-white truncate">
                  {d.name || d.original_name || d.title || d.original_title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3">{d.overview}</p>
                <p className="text-gray-400 text-xs mt-2">Type: {d.media_type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCards;