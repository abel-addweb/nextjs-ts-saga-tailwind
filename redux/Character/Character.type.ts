import { ApiCallState } from "../util";

export type Character = {
    char_id: number,
    name: string,
    birthday: string,
    occupation: string[],
    img: string,
    status: string,
    appearance: number[],
    nickname: string,
    portrayed: string 
};

export type CharacterStateTypes = {
    fetchAll: ApiCallState<Character[]>,
    fetchOne: ApiCallState<any>,
    fetchAllRandom: ApiCallState<Character[]>
};

export const CharacterActionTypes = {
    FETCH_ALL_CHARACTERS: "FETCH_ALL_CHARACTERS",
    FETCH_ALL_CHARACTERS_RESET: "FETCH_ALL_CHARACTERS_RESET",
    FETCH_ALL_CHARACTERS_FAILURE: "FETCH_ALL_CHARACTERS_FAILURE",
    FETCH_ALL_CHARACTERS_SUCCESS: "FETCH_ALL_CHARACTERS_SUCCESS",

    FETCH_ALL_RANDOM_CHARACTERS: "FETCH_ALL_RANDOM_CHARACTERS",
    FETCH_ALL_RANDOM_CHARACTERS_RESET: "FETCH_ALL_RANDOM_CHARACTERS_RESET",
    FETCH_ALL_RANDOM_CHARACTERS_FAILURE: "FETCH_ALL_RANDOM_CHARACTERS_FAILURE",
    FETCH_ALL_RANDOM_CHARACTERS_SUCCESS: "FETCH_ALL_RANDOM_CHARACTERS_SUCCESS",

    FETCH_ONE_CHARACTER: "FETCH_ONE_CHARACTER",
    FETCH_ONE_CHARACTER_RESET: "FETCH_ONE_CHARACTER_RESET",
    FETCH_ONE_CHARACTER_FAILURE: "FETCH_ONE_CHARACTER_FAILURE",
    FETCH_ONE_CHARACTER_SUCCESS: "FETCH_ONE_CHARACTER_SUCCESS",
}