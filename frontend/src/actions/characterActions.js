import Axios from 'axios';
import {
  CHARACTER_DETAILS_FAIL,
  CHARACTER_DETAILS_REQUEST,
  CHARACTER_DETAILS_SUCCESS,
  CHARACTER_LIST_FAIL,
  CHARACTER_LIST_REQUEST,
  CHARACTER_LIST_SUCCESS,
} from '../constants/characterConstants';

// Las actions son funciones asi que voy a exportarla
export const listCharacters = () => async (dispatch) => {
  dispatch({
    type: CHARACTER_LIST_REQUEST,
  });
  // El siguente paso es alimentare
  try {
    const { data } = await Axios.get('/api/characters');
    dispatch({ type: CHARACTER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CHARACTER_LIST_FAIL, payload: error.message });
  }
};

export const detailsCharacter = (characterId) => async (dispatch) => {
  dispatch({ type: CHARACTER_DETAILS_REQUEST, payload: characterId });
  try {
    const { data } = await Axios.get(`/api/characters/${characterId}`);
    dispatch({ type: CHARACTER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHARACTER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
