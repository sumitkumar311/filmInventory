import { useState } from "react";
import MediaList from "./MediaList";

const Popular = () => {
  const [selectedMedia, setSelectedMedia] = useState({ label: "Movies", value: "movie" });

  const dropdownOptions = [
    { label: "Movies", value: "movie" },
    { label: "TV Shows", value: "tv" },
  ];

  const handleMediaChange = (option) => {
    setSelectedMedia(option);
  };

  return (
    <MediaList
      title={`Popular`}
      basePath={selectedMedia.value}
      subOption="popular"
      dropdownOptions={dropdownOptions}
      onDropdownChange={handleMediaChange}
      selectedOption={selectedMedia}
    />
  );
};

export default Popular;