
import { useNavigate, useLocation } from 'react-router-dom';

const TrendingDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state?.item;

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
        <button onClick={() => navigate(-1)} className="mb-4 text-2xl">
          <i className="cursor-pointer ri-arrow-left-line mr-2"></i>Back
        </button>
        <div>No details found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <button onClick={() => navigate(-1)} className="text-2xl mb-6 flex items-center">
        <i className="ri-arrow-left-line mr-2"></i>Back
      </button>
      <div className="max-w-3xl mx-auto bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : item.profile_path
              ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
              : 'https://via.placeholder.com/500x750?text=No+Image'
          }
          alt={item.title || item.name}
          className="w-full md:w-64 h-80 object-cover rounded bg-zinc-700"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{item.title || item.name}</h1>
            <div className="text-zinc-400 mb-2">
              <span className="capitalize">{item.media_type ? item.media_type.replace('_', ' ') : 'Unknown'}</span>
              {item.vote_average && (
                <span className="ml-4 bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-bold">
                  {item.vote_average.toFixed(1)}
                </span>
              )}
            </div>
            {item.overview && (
              <p className="text-zinc-300 mb-2">{item.overview}</p>
            )}
            {item.release_date && (
              <div className="text-zinc-400 mb-1">Release Date: {item.release_date}</div>
            )}
            {item.first_air_date && (
              <div className="text-zinc-400 mb-1">First Air Date: {item.first_air_date}</div>
            )}
            {item.known_for_department && (
              <div className="text-zinc-400 mb-1">Department: {item.known_for_department}</div>
            )}
            {item.popularity && (
              <div className="text-zinc-400 mb-1">Popularity: {item.popularity}</div>
            )}
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDetail;
