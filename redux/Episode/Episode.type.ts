import { ApiCallState } from "../util";

export type Episode = {
    id: number,
    title: string,
    season: number,
    episode: number,
    air_date: string,
    characters: string[],
    series: string,
};

export type EpisodeStateTypes = {
    fetchAll: ApiCallState<Episode[]>,
};

export const EpisodeActionTypes = {
    FETCH_ALL_EPISODES: "FETCH_ALL_EPISODES",
    FETCH_ALL_EPISODES_RESET: "FETCH_ALL_EPISODES_RESET",
    FETCH_ALL_EPISODES_FAILURE: "FETCH_ALL_EPISODES_FAILURE",
    FETCH_ALL_EPISODES_SUCCESS: "FETCH_ALL_EPISODES_SUCCESS",
}