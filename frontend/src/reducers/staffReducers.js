import {
  STAFF_DETAILS_FAIL,
  STAFF_DETAILS_REQUEST,
  STAFF_DETAILS_SUCCESS,
  STAFF_LIST_FAIL,
  STAFF_LIST_REQUEST,
  STAFF_LIST_SUCCESS,
} from '../constants/staffConstants';

export const staffListReducer = (
  state = { loading: true, staff: [] },
  action
) => {
  switch (action.type) {
    case STAFF_LIST_REQUEST:
      return { loading: true };
    case STAFF_LIST_SUCCESS:
      return { loading: false, staff: action.payload };
    case STAFF_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const characterDetailsReducer = (
  state = { staff: {}, loading: true },
  action
) => {
  switch (action.type) {
    case STAFF_DETAILS_REQUEST:
      return { loading: true };
    case STAFF_DETAILS_SUCCESS:
      return { loading: false, staff: action.payload };
    case STAFF_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
