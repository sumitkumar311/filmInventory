import { useState } from "react";
import MediaList from "./MediaList";

const Trending = () => {
  const [selectedOption, setSelectedOption] = useState({ value: 'all', label: 'All' });

  const dropdownOptions = [
    { value: 'all', label: 'All' },
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Shows' },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <MediaList
      title="Trending"
      basePath="trending"
      subOption="day"
      dropdownOptions={dropdownOptions}
      onDropdownChange={handleOptionChange}
      selectedOption={selectedOption}
    />
  );
};

export default Trending;