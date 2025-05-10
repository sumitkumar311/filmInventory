const Cards = ({ item, onClick }) => {
  const getMediaType = () => {
    if (item.media_type) return item.media_type.replace("_", " ");
    if (item.known_for_department) return "Person";
    if (item.first_air_date) return "TV Show";
    if (item.release_date) return "Movie";
    return "Unknown";
  };

  const getImagePath = () => {
    if (item.profile_path) return `https://image.tmdb.org/t/p/w500${item.profile_path}`;
    return `https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`;
  };

  const getTitle = () => item.name || item.title || "Unknown";

  const getSubtitle = () => {
    if (item.popularity) return `Pop. ${item.popularity}`;
    if (item.character) return `Character: ${item.character}`;
    return item.release_date || item.first_air_date || "";
  };

  return (
    <div
      className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <img
        src={getImagePath()}
        alt={getTitle()}
        className="w-full h-64 object-cover bg-zinc-700"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-white mb-2 truncate">
          {getTitle()}
        </h2>
        <div className="flex items-center justify-between text-zinc-400 text-sm">
          <span className="capitalize">{getMediaType()}</span>
          {item.vote_average ? (
            <span className="bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-bold ml-2">
              {item.vote_average.toFixed(1)}
            </span>
          ) : (
            <span className="text-xs">{getSubtitle()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
