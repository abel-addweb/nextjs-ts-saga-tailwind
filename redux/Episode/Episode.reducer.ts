import { ActionType, resetApiCallState } from "../util";
import { EpisodeActionTypes, EpisodeStateTypes } from "./Episode.type";

const INITIAL_STATE: EpisodeStateTypes = {
    fetchAll: resetApiCallState([]),
};

const EpisodeReducer = (state: EpisodeStateTypes = INITIAL_STATE, action: ActionType): EpisodeStateTypes => {
    switch (action.type) {
        case EpisodeActionTypes.FETCH_ALL_EPISODES:
            return { ...state, fetchAll: { error: null, payload: [], isLoading: true, isLoaded: false } };
        case EpisodeActionTypes.FETCH_ALL_EPISODES_RESET:
            return { ...state, fetchAll: resetApiCallState([]) };
        case EpisodeActionTypes.FETCH_ALL_EPISODES_FAILURE:
            return { ...state, fetchAll: { error: action.payload, payload: [], isLoading: false, isLoaded: true } };
        case EpisodeActionTypes.FETCH_ALL_EPISODES_SUCCESS:
            return { ...state, fetchAll: { error: null, payload: action.payload, isLoading: false, isLoaded: true } };
        default:
            return state;
    }
}

export default EpisodeReducer;