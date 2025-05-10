import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import noimage from "../assets/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  const getsearch = async () => {
    if (query.length > 0) {
      try {
        const response = await axios.get(`search/multi?query=${query}`);
        console.log(response.data.results);
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getsearch();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="w-full h-[10vh] flex justify-center relative items-center">
      <div className="flex items-center w-[50%] relative">
        <i className="text-2xl cursor-pointer text-zinc-400 ri-search-line absolute left-2"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="h-[40px] w-full pl-12 pr-10 py-2 rounded-md text-sm border-none focus:outline-none"
          placeholder="Search"
        />
        {query.length > 0 && (
          <i
            className="text-2xl cursor-pointer text-zinc-400 ri-close-fill absolute right-2"
            onClick={handleClear}
          ></i>
        )}
      </div>

      {query.length > 0 && results.length > 0 && (
        <div className="absolute z-50 overflow-auto top-[100%] left-1/2 -translate-x-1/2 rounded-xl w-[50%] max-h-[50vh] bg-zinc-700  mt-2">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-full flex items-center gap-4 bg-zinc-700 hover:bg-zinc-100  hover:text-black
                text-white duration-200 px-4 py-3 cursor-pointer transition-all"
              onClick={() => {
                const mediaType = result.media_type;
                if (mediaType === "person") {
                  navigate(`/details/person/${result.id}`, { state: { item: result } });
                } else {
                  navigate(`/details/${mediaType}/${result.id}`, { state: { item: result } });
                }
                handleClear();
              }}
            >
              <div className="flex-shrink-0 w-14 h-14 rounded overflow-hidden bg-zinc-300 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={
                    result.profile_path
                      ? `https://image.tmdb.org/t/p/w185${result.profile_path}`
                      : result.poster_path
                      ? `https://image.tmdb.org/t/p/w185${result.poster_path}`
                      : result.backdrop_path
                      ? `https://image.tmdb.org/t/p/w185${result.backdrop_path}`
                      : noimage
                  }
                  alt="profile"
                  onError={e => { e.target.onerror = null; e.target.src = noimage; }}
                />
              </div>
              <span className="font-medium text-base truncate">
                {result.name ||
                  result.original_name ||
                  result.title ||
                  result.original_title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;