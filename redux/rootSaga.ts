import { all, call } from 'redux-saga/effects'
import { watcherFetchAllCharacters, watcherFetchOneCharacter, watcherFetchAllRandomCharacters } from './Character/Character.saga';
import {watcherFetchAllEpisodes} from "./Episode/Episode.saga";

function* rootSaga() {
    yield all([
        call(watcherFetchAllCharacters),
        call(watcherFetchOneCharacter),
        call(watcherFetchAllEpisodes),
        call(watcherFetchAllRandomCharacters)
    ])
}

export default rootSaga;