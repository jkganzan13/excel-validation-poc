import { combineReducers } from 'redux';
import validationReducer from './validation';

const reducers = {
	validationReducer
};
const combined = combineReducers(reducers);
export default combined;