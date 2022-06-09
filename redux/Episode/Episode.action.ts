import { EpisodeActionTypes } from "./Episode.type";

export const fetchAllEpisodes = (payload?: any) => ({type: EpisodeActionTypes.FETCH_ALL_EPISODES, payload})