// src/store/actions/mediaAction.js
import axios from "../../utils/axios";
import { loadInfo } from "../reducer/mediaSlice";

export const getMediaInfo = ({ media_type, id }) => async (dispatch) => {
  try {
    const detail = await axios.get(`/${media_type}/${id}`);
    const external_ids = await axios.get(`/${media_type}/${id}/external_ids`);
    const recommendations = await axios.get(`/${media_type}/${id}/recommendations`);
    const similar = await axios.get(`/${media_type}/${id}/similar`);
    const videos = await axios.get(`/${media_type}/${id}/videos`);
    const watchproviders = await axios.get(`/${media_type}/${id}/watch/providers`);

    const ultimatedata = {
      detail: detail.data,
      external_ids: external_ids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results,
      watchproviders: watchproviders.data.results,
    };

    dispatch(loadInfo(ultimatedata));
  } catch (err) {
    console.error(err);
  }
};
