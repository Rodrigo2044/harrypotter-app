import Axios from 'axios';

import {
  STUDENT_DETAILS_FAIL,
  STUDENT_DETAILS_REQUEST,
  STUDENT_DETAILS_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
} from '../constants/studentConstants';

// Las actions son funciones asi que voy a exportarla
export const listStudents = () => async (dispatch) => {
  dispatch({
    type: STUDENT_LIST_REQUEST,
  });
  // El siguente paso es alimentare
  try {
    const { data } = await Axios.get('/api/students');
    dispatch({ type: STUDENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_LIST_FAIL, payload: error.message });
  }
};

export const detailsStudent = (StudentId) => async (dispatch) => {
  dispatch({ type: STUDENT_DETAILS_REQUEST, payload: StudentId });
  try {
    const { data } = await Axios.get(`/api/students/${StudentId}`);
    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STUDENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
