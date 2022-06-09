import { put, takeLatest } from "redux-saga/effects";
import { CharacterActionTypes } from "./Character.type";
import axios from "axios";

export function* fetchAllCharacters(arg: any): any {
    try {
        const response = yield axios.get(arg?.payload?.name ? `https://www.breakingbadapi.com/api/characters?name=${arg?.payload?.name}` : `https://www.breakingbadapi.com/api/characters`);
        yield put({type: CharacterActionTypes.FETCH_ALL_CHARACTERS_SUCCESS, payload: response.data})
    }catch(err) {
        yield put({type: CharacterActionTypes.FETCH_ALL_CHARACTERS_FAILURE, payload: err})
    }
}

export function* fetchAllRandomCharacters(arg: any): any {
    try {
        const response = yield axios.get(`https://www.breakingbadapi.com/api/character/random?limit=5`);
        yield put({type: CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS_SUCCESS, payload: response.data})
    }catch(err) {
        yield put({type: CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS_FAILURE, payload: err})
    }
}

export function* fetchOneCharacter(arg: any): any {
    console.log("ARF >>  ", arg.payload);
    try {
        const response = yield axios.get(`https://www.breakingbadapi.com/api/characters/${arg?.payload}`);
        yield put({type: CharacterActionTypes.FETCH_ONE_CHARACTER_SUCCESS, payload: response.data})
    }catch(err) {
        yield put({type: CharacterActionTypes.FETCH_ONE_CHARACTER_FAILURE, payload: err})
    }
}

export function* watcherFetchAllCharacters() {
    yield takeLatest(CharacterActionTypes.FETCH_ALL_CHARACTERS, fetchAllCharacters);
}

export function* watcherFetchAllRandomCharacters() {
    yield takeLatest(CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS, fetchAllRandomCharacters);
}

export function* watcherFetchOneCharacter() {
    yield takeLatest(CharacterActionTypes.FETCH_ONE_CHARACTER, fetchOneCharacter);
}