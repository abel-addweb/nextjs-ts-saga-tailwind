import { CharacterActionTypes } from "./Character.type";

export const fetchAllCharacters = (payload?: any) => ({type: CharacterActionTypes.FETCH_ALL_CHARACTERS, payload})

export const fetchAllRandomCharacters = (payload?: any) => ({type: CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS, payload})

export const fetchOneCharacter = (payload?: any) => ({type: CharacterActionTypes.FETCH_ONE_CHARACTER, payload})