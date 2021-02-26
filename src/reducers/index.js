import { combineReducers } from 'redux';

export default combineReducers({
  replaceMe: () => 'hi there' // tricking redux to think that we have a valid reducer
});