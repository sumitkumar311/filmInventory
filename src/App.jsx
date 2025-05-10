import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Trending from './component/Trending';
import Popular from './component/Popular';
import Movies from './component/Movies';
import People from './component/People';
import Details from './component/details/Details';
import PeopleDetails from './component/details/PeopleDetails';
import About from './component/About';

const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<About />} />

        {/* Detail routes */}
        <Route path="/details/:media_type/:id" element={<Details />} />
        <Route path="/details/person/:id" element={<PeopleDetails />} />

      </Routes>
    </div>
  );
};

export default App;
