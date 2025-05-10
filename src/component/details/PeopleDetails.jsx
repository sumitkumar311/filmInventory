import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getpeopleInfo } from "../../store/actions/peopleAction";
import { resetInfo } from "../../store/reducer/peopleSlice";

const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const info = useSelector((state) => state.people.info);

  useEffect(() => {
    dispatch(getpeopleInfo(id));
    return () => {
      dispatch(resetInfo());
    };
  }, [dispatch, id]);

  if (!info || !info.detail) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  const { detail, external_ids, images, movie_credits, tv_credits } = info;

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      {/* Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.profile_path})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end p-8">
          <div className="bg-black/70 p-6 rounded-xl w-full max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-2">{detail.name}</h1>
            <p className="text-xl text-gray-300 italic mb-4">{detail.known_for_department}</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              ⬅ Back
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-12">
        {/* Biography */}
        <Section title="Biography">
          <p className="text-gray-300 leading-relaxed">{detail.biography || "No biography available."}</p>
        </Section>

        {/* Details */}
        <Section title="Details">
          <ul className="text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li><strong>Birthday:</strong> {detail.birthday || "N/A"}</li>
            <li><strong>Place of Birth:</strong> {detail.place_of_birth || "N/A"}</li>
            <li><strong>Popularity:</strong> {detail.popularity?.toFixed(1) || "N/A"}</li>
          </ul>
        </Section>

        {/* External Links */}
        <Section title="External Links">
          <div className="flex flex-wrap gap-4">
            {external_ids.imdb_id && <LinkBtn href={`https://www.imdb.com/name/${external_ids.imdb_id}`} label="IMDb" />}
            {external_ids.facebook_id && <LinkBtn href={`https://www.facebook.com/${external_ids.facebook_id}`} label="Facebook" />}
            {external_ids.instagram_id && <LinkBtn href={`https://www.instagram.com/${external_ids.instagram_id}`} label="Instagram" />}
            {external_ids.twitter_id && <LinkBtn href={`https://twitter.com/${external_ids.twitter_id}`} label="Twitter" />}
          </div>
        </Section>

        {/* Images */}
        <Section title="Images">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                alt={`Image ${idx + 1}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </Section>

        {/* Movie Credits */}
        <Section title="Movie Credits">
          <CardGrid data={movie_credits} isMovie navigate={navigate} />
        </Section>

        {/* TV Credits */}
        <Section title="TV Credits">
          <CardGrid data={tv_credits} isMovie={false} navigate={navigate} />
        </Section>

        
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">{title}</h2>
    {children}
  </div>
);

const LinkBtn = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-500 transition"
  >
    {label}
  </a>
);

const CardGrid = ({ data, isMovie, navigate }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {data.map((item, idx) => (
      <div
        key={idx}
        onClick={() => navigate(`/details/${isMovie ? "movie" : "tv"}/${item.id}`)}
        className="cursor-pointer group"
      >
        <img
          src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "/placeholder.png"}
          alt={item.title || item.name}
          className="rounded-xl group-hover:scale-105 transition-transform"
        />
        <p className="text-center text-sm mt-2 text-gray-300">{item.title || item.name}</p>
      </div>
    ))}
  </div>
);

export default PeopleDetails;
