import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import tasksReducer from "./reducers/tasksReducer.js";

const reducers = combineReducers(
	{
		form: formReducer,
		tasksPage: tasksReducer
	}
)
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
	
