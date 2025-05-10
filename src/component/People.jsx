import { useState } from "react";
import MediaList from "./MediaList";

const People = () => {
  const [selectedOption, setSelectedOption] = useState({ label: "Popular", value: "popular" });

  const dropdownOptions = [
    { label: "Popular", value: "popular" },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  return (
    <MediaList
      title={`People`}
      basePath="person"
      subOption={selectedOption.value}
      dropdownOptions={dropdownOptions}
      onDropdownChange={handleOptionChange}
      selectedOption={selectedOption}
    />
  );
};

export default People;