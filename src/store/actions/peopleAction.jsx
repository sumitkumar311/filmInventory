import axios from "../../utils/axios";
import { loadInfo } from "../reducer/peopleSlice";

export const getpeopleInfo = (id) => async (dispatch) => {
  try {
    const [detail, external_ids, images, latest, movie_credits, tv_credits] = await Promise.all([
      axios.get(`/person/${id}`),
      axios.get(`/person/${id}/external_ids`),
      axios.get(`/person/${id}/images`),
      axios.get(`/person/latest`),
      axios.get(`/person/${id}/movie_credits`),
      axios.get(`/person/${id}/tv_credits`)
    ]);

    const ultimatedata = {
      detail: detail.data,
      external_ids: external_ids.data,
      images: images.data.profiles, // ✅ correct path
      latest: latest.data,           // ✅ no `.results`
      movie_credits: movie_credits.data.cast, // ✅ use .cast or .crew as needed
      tv_credits: tv_credits.data.cast        // ✅ use .cast or .crew as needed
    };

    dispatch(loadInfo(ultimatedata));
    console.log(ultimatedata);
  } catch (err) {
    console.error("Error loading person info:", err);
  }
};
