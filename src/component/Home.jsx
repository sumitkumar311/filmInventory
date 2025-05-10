import React, { useEffect , useState } from 'react'
import Sidenav from '../partial/Sidenav'
import Topnav from '../partial/Topnav'
import Header from '../partial/Header'
import axios from "../utils/axios"
import HorizontalCards from '../partial/HorizontalCards'

const Home = () => {
  const [images, setImages] = useState(null)
  const [horizontalImage, setHorizontalImage] = useState([])

  const getHeaderimg = async () => {
    try {
      const { data } = await axios.get("trending/all/day");
      const randomimage = data.results[(Math.random() * data.results.length).toFixed()];

      // Fetch trailer key for the selected random image
      if (randomimage.media_type === "movie" || randomimage.media_type === "tv") {
        const trailerResponse = await axios.get(`${randomimage.media_type}/${randomimage.id}/videos`);
        const trailer = trailerResponse.data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        randomimage.trailerKey = trailer ? trailer.key : null;
      }

      setImages(randomimage);
    } catch (error) {
      console.error("Error fetching image or trailer key:", error);
    }
  }

  const gethorizontalImages = async () => {
    try {
      const { data } = await axios.get("trending/all/day")
      setHorizontalImage(data.results)
      
    } catch (error) {
      console.error("Error fetching horizontal images:", error)
    }
  }

  useEffect(() => {
    !images && getHeaderimg()
    gethorizontalImages()
  }, [])
  

  return (
    <div className='w-full h-full flex'>
      <Sidenav />
      <div className='w-[80%] min-h-full px-4 flex flex-col'>
        <Topnav />
        <Header image={images} />
        <HorizontalCards horizontalImage={horizontalImage} />
      </div>
    </div>
  );
}

export default Home;
