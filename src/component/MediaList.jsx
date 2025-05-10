import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../partial/Topnav";
import Dropdown from "../partial/Dropdown";
import Cards from "../partial/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Scroller from "./Scroller";

const MediaList = ({ title, basePath, subOption, dropdownOptions, onDropdownChange, selectedOption }) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    onDropdownChange(option);
  };

  const handleCardClick = async (item) => {
    setIsLoading(true);
    const mediaType = item.media_type || basePath;
    navigate(`/details/${mediaType}/${item.id}`);
    setIsLoading(false);
  };

  const getMediaItems = async () => {
    try {
      let url;
      if (basePath === "trending") {
        url = `trending/${selectedOption.value}/${subOption}`;
      } else if (["movie", "tv", "person"].includes(basePath)) {
        url = `${basePath}/${subOption}`;
      } else {
        url = `${basePath}/${selectedOption.value === "all" ? subOption : selectedOption.value}/${subOption}`;
      }

      const { data } = await axios.get(url, {
        params: { page },
      });

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setMediaItems((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching media items:", error);
      setHasMore(false);
    }
    console.log("Fetched media items:", mediaItems);
  };

  useEffect(() => {
    setMediaItems([]);
    setPage(1);
    setHasMore(true);
  }, [selectedOption, subOption]);

  useEffect(() => {
    if (page === 1) getMediaItems();
  }, [page, selectedOption, subOption]);

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader"></div>
        </div>
      )}
      <header className="p-4 flex justify-between items-center bg-zinc-900">
        <div className="flex items-center mb-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-2xl mr-4 cursor-pointer"
          ></i>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="mb-4 w-full"><Topnav /></div>
        <div className="flex gap-4 w-[10%]">
          <Dropdown options={dropdownOptions} value={selectedOption} onSelect={handleSelect} />
        </div>
      </header>

      <main className="flex justify-center w-full">
        <div className="p-6 w-full max-w-7xl">
          <InfiniteScroll
            dataLength={mediaItems.length}
            next={getMediaItems}
            hasMore={hasMore}
            loader={<h4 className="text-white">Loading...</h4>}
            endMessage={<p className="text-center text-gray-400 mt-6">You have seen it all!</p>}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {mediaItems.map((item, index) => (
                <Cards
                  key={`${item.id}-${index}`}
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </main>

      <Scroller />
    </div>
  );
};

export default MediaList;
