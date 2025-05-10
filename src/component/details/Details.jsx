// src/pages/Details.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getMediaInfo } from "../../store/actions/mediaAction";
import { resetInfo } from "../../store/reducer/mediaSlice";

const Details = () => {
  const { media_type, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector((state) => state.media.info);

  useEffect(() => {
    dispatch(getMediaInfo({ media_type, id }));
    return () => {
      dispatch(resetInfo());
    };
  }, [dispatch, media_type, id]);

  if (!info || !info.detail) {
    return <div className="">Loading...</div>;
  }

  const { detail, videos, recommendations, similar } = info;
  const title = detail.title || detail.name || "Untitled";

  return (
    <div className="text-white min-h-screen bg-black">
      <div className="relative">
        
        <img
          src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
          alt={title}
          className="w-full h-[60vh] object-cover opacity-90 "
        />
        <div className="absolute top-0 left-0 w-full h-[60vh] flex flex-col justify-center items-start p-6 bg-gradient-to-t from-black via-transparent to-black">
          <button
            onClick={() => navigate(-1)}
            className="text-white cursor-pointer bg-gray-800 px-4 py-2 rounded mb-4 hover:bg-gray-700"
          >
            Back
          </button>
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{detail.overview}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Trailer Section */}
        {videos && videos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Watch Trailer</h2>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videos[0].key}`}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        )}

        {/* Recommendations Section */}
        {recommendations && recommendations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Recommended for You</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    navigate(`/details/${item.media_type || media_type}/${item.id}`);
                    window.scrollTo(0, 0); // Scroll to top to avoid loading confusion
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-2 text-center text-gray-300">{item.title || item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar Section */}
        {similar && similar.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">More Like This</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {similar.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    navigate(`/details/${item.media_type || media_type}/${item.id}`);
                    window.scrollTo(0, 0); // Scroll to top to avoid loading confusion
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-2 text-center text-gray-300">{item.title || item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
