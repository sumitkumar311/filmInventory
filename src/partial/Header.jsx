import React, { useState } from "react";

const Header = ({ image }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  return image ? (
    <div className="w-full h-[50vh] relative flex flex-col justify-end ">
      {image && image.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
          alt={image.title || image.name}
          className="w-full absolute h-full object-cover object-center opacity-80 "
        />
      )}
      <div className="p-8 w-[55%] z-10">
        <h1 className="text-4xl  font-bold ">
          {image.name ||
            image.original_name ||
            image.title ||
            image.original_title}
        </h1>
        <p>{image.overview.slice(0, 150)}</p>
        <button
          onClick={() => setShowTrailer(true)}
          className="text-lg cursor-pointer mt-2 flex gap-2 p-2 px-6 w-fit rounded-lg bg-zinc-600 hover:bg-zinc-700 duration-300"
        >
          Watch Trailer
        </button>
      </div>

      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute cursor-pointer top-[4] right-1 text-red-600 text-3xl"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${image.trailerKey}`}
              title="YouTube Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Header;
