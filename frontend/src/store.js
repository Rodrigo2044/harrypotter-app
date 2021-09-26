import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// import data from './data';
import {
  characterDetailsReducer,
  characterListReducer,
} from './reducers/characterReducers';
import { staffListReducer } from './reducers/staffReducers';

import { studentListReducer } from './reducers/studentReducers';

const initialState = {};
// const reducer = (state, action) => {
//   // Esta funcion me regresa un nuevo estado
//   return { characters: data.characters };
// };

const reducer = combineReducers({
  characterList: characterListReducer,
  characterDetails: characterDetailsReducer,
  studentList: studentListReducer,
  staffList: staffListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Ahora podemos crear nuestro primer store, el store acepta reducer y initial state
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
