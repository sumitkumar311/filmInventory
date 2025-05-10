import { useState } from "react";
import MediaList from "./MediaList";

const Movies = () => {
  const [selectedOption, setSelectedOption] = useState({ label: "Upcoming", value: "upcoming" });

  const dropdownOptions = [
    { label: "Popular", value: "popular" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Top Rated", value: "top_rated" },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <MediaList
      title={`Movies`}
      basePath="movie"
      subOption={selectedOption.value}
      dropdownOptions={dropdownOptions}
      onDropdownChange={handleOptionChange}
      selectedOption={selectedOption}
    />
  );
};

export default Movies;