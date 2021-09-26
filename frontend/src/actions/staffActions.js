import Axios from 'axios';

import {
  STAFF_DETAILS_FAIL,
  STAFF_DETAILS_REQUEST,
  STAFF_DETAILS_SUCCESS,
  STAFF_LIST_FAIL,
  STAFF_LIST_REQUEST,
  STAFF_LIST_SUCCESS,
} from '../constants/staffConstants';

// Las actions son funciones asi que voy a exportarla
export const listStaff = () => async (dispatch) => {
  dispatch({
    type: STAFF_LIST_REQUEST,
  });
  // El siguente paso es alimentare
  try {
    const { data } = await Axios.get('/api/staff');
    dispatch({ type: STAFF_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STAFF_LIST_FAIL, payload: error.message });
  }
};

export const detailsStaff = (StaffId) => async (dispatch) => {
  dispatch({ type: STAFF_DETAILS_REQUEST, payload: StaffId });
  try {
    const { data } = await Axios.get(`/api/staff/${StaffId}`);
    dispatch({ type: STAFF_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STAFF_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
