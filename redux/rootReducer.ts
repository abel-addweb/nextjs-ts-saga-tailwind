import { combineReducers } from "redux";
import CharacterReducer from "./Character/Character.reducer";
import EpisodeReducer from "./Episode/Episode.reducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    episodes: EpisodeReducer
})

export default rootReducer;