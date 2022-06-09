import { put, takeLatest } from "redux-saga/effects";
import { EpisodeActionTypes } from "./Episode.type";
import axios from "axios";

export function* fetchAllEpisodes(arg: any): any {
    try {
        const response = yield axios.get(arg?.payload?.name ? `https://www.breakingbadapi.com/api/episodes?name=${arg?.payload?.name}` : `https://www.breakingbadapi.com/api/episodes`);
        yield put({type: EpisodeActionTypes.FETCH_ALL_EPISODES_SUCCESS, payload: response.data})
    }catch(err) {
        yield put({type: EpisodeActionTypes.FETCH_ALL_EPISODES_FAILURE, payload: err})
    }
}

export function* watcherFetchAllEpisodes() {
    yield takeLatest(EpisodeActionTypes.FETCH_ALL_EPISODES, fetchAllEpisodes);
}
