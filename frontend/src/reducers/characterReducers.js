import {
  CHARACTER_DETAILS_FAIL,
  CHARACTER_DETAILS_REQUEST,
  CHARACTER_DETAILS_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
} from '../constants/characterConstants';

export const characterListReducer = (
  state = { loading: true, characters: [] },
  action
) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUEST:
      return { loading: true };
    case CHARACTER_LIST_SUCCESS:
      return { loading: false, characters: action.payload };
    case CHARACTER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const characterDetailsReducer = (
  state = { character: {}, loading: true },
  action
) => {
  switch (action.type) {
    case CHARACTER_DETAILS_REQUEST:
      return { loading: true };
    case CHARACTER_DETAILS_SUCCESS:
      return { loading: false, character: action.payload };
    case CHARACTER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
