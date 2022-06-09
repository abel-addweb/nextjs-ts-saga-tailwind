import { ActionType, resetApiCallState } from "../util";
import { CharacterActionTypes, CharacterStateTypes } from "./Character.type";

const INITIAL_STATE: CharacterStateTypes = {
  fetchAll: resetApiCallState([]),
  fetchOne: resetApiCallState({}),
  fetchAllRandom: resetApiCallState([])
};

const CharacterReducer = (
  state: CharacterStateTypes = INITIAL_STATE,
  action: ActionType
): CharacterStateTypes => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_ALL_CHARACTERS:
      return {
        ...state,
        fetchAll: {
          error: null,
          payload: [],
          isLoading: true,
          isLoaded: false,
        },
      };
    case CharacterActionTypes.FETCH_ALL_CHARACTERS_RESET:
      return { ...state, fetchAll: resetApiCallState([]) };
    case CharacterActionTypes.FETCH_ALL_CHARACTERS_FAILURE:
      return {
        ...state,
        fetchAll: {
          error: action.payload,
          payload: [],
          isLoading: false,
          isLoaded: true,
        },
      };
    case CharacterActionTypes.FETCH_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetchAll: {
          error: null,
          payload: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };

    case CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS:
      return {
        ...state,
        fetchAllRandom: {
          error: null,
          payload: [],
          isLoading: true,
          isLoaded: false,
        },
      };
    case CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS_RESET:
      return { ...state, fetchAllRandom: resetApiCallState([]) };
    case CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS_FAILURE:
      return {
        ...state,
        fetchAllRandom: {
          error: action.payload,
          payload: [],
          isLoading: false,
          isLoaded: true,
        },
      };
    case CharacterActionTypes.FETCH_ALL_RANDOM_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetchAllRandom: {
          error: null,
          payload: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };

    case CharacterActionTypes.FETCH_ONE_CHARACTER:
      return {
        ...state,
        fetchOne: {
          error: null,
          payload: {},
          isLoading: true,
          isLoaded: false,
        },
      };
    case CharacterActionTypes.FETCH_ONE_CHARACTER_RESET:
      return { ...state, fetchOne: resetApiCallState({}) };
    case CharacterActionTypes.FETCH_ONE_CHARACTER_FAILURE:
      return {
        ...state,
        fetchOne: {
          error: action.payload,
          payload: {},
          isLoading: false,
          isLoaded: true,
        },
      };
    case CharacterActionTypes.FETCH_ONE_CHARACTER_SUCCESS:
      return {
        ...state,
        fetchOne: {
          error: null,
          payload: action.payload,
          isLoading: false,
          isLoaded: true,
        },
      };
    default:
      return state;
  }
};

export default CharacterReducer;
