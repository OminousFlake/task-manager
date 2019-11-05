import { tasksAPI } from './../../api/api.js';

const DISPLAY_TASKS = 'DISPLAY_TASKS';
const SET_TOTAL_TASKS_COUNT = 'SET_TOTAL_TASKS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ENTER_ADMIN_MODE = 'ENTER_ADMIN_MODE';
const EXIT_ADMIN_MODE = 'EXIT_ADMIN_MODE';
const ENTER_EDIT_MODE = 'ENTER_EDIT_MODE';
const SAVE_SORT = 'SAVE_SORT';
const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
const SHOW_FEEDBACK_ON_CREATION = 'SHOW_FEEDBACK_ON_CREATION';
const SHOW_FEEDBACK_ON_ADMIN_LOG_IN = 'SHOW_FEEDBACK_ON_ADMIN_LOG_IN';
const CLOSE_MESSAGES = 'CLOSE_MESSAGES';
const ADD_TO_EDITED_IDS = 'ADD_TO_EDITED_IDS';

const findObjectById = (array, id) => {
	let index = null;
	array.forEach((el, arrIndex) => {
		if (el.id === id) index = arrIndex;
	})
	return index;
}

const saveInLocalStorage = (data, stringName) => {
	localStorage.setItem(stringName, data);
}

const getFromLocalStorage = (stringName) => {
	return localStorage.getItem(stringName) === 'true';
}

const initialState = {
	tasks: [],
	pageSize: 3,
	totalTasksCount: 0,
	currentPage: 1,
	isAdmin: getFromLocalStorage('isAdmin') || false,
	editModeId: null,
	sortType: null,
	sortDirection: null,
	authToken: null,
	feedbackOnCreation: null,
	feedbackOnAdminLogIn: null,
	idsEditedByAdmin: []
};

const tasksReducer = (state = initialState, action) => {
	switch(action.type) {
		case DISPLAY_TASKS: {
			return {...state, tasks: [...action.tasks]};
		}
		case SET_TOTAL_TASKS_COUNT: {
			return {...state, totalTasksCount: action.tasksCount};
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.page};
		}
		case ENTER_ADMIN_MODE: {
			const stateCopy = {...state};
			stateCopy.isAdmin = action.adminLoggedIn;
			saveInLocalStorage('true', 'isAdmin');
			return stateCopy;
		}
		case EXIT_ADMIN_MODE: {
			const stateCopy = {...state};
			stateCopy.isAdmin = false;
			stateCopy.authToken = null;
			saveInLocalStorage('false', 'isAdmin');
			return stateCopy;
		}
		case ENTER_EDIT_MODE: {
			return {...state, editModeId: action.editModeId};
		}
		case SAVE_SORT: {
			return {
				...state,
				sortType: action.sortType,
				sortDirection: action.sortDirection
			};
		}
		case SET_AUTH_TOKEN:
			return {...state, authToken: action.authToken};
		case SHOW_FEEDBACK_ON_CREATION: {
			return {...state, feedbackOnCreation: action.feedback};
		}
		case SHOW_FEEDBACK_ON_ADMIN_LOG_IN: {
			return {...state, feedbackOnAdminLogIn: action.feedback};
		}
		case CLOSE_MESSAGES: {
			return {
				...state,
				feedbackOnCreation: null,
				feedbackOnAdminLogIn: null,
			};
		}
		case ADD_TO_EDITED_IDS: {
			const stateCopy = {...state};
			stateCopy.tasks = [...state.tasks];
			stateCopy.idsEditedByAdmin = [...state.idsEditedByAdmin];
			const index = findObjectById(stateCopy.tasks, action.id);
			if (action.text !== stateCopy.tasks[index].text) {
				if (!stateCopy.idsEditedByAdmin.some(el => el === action.id)) {
					stateCopy.idsEditedByAdmin.push(action.id);
				}
			}
			return stateCopy;
		}
		default: {
			return state;
		}
	}
}

const displayTasks = (tasks) => ({type: DISPLAY_TASKS, tasks});
const setTotalTasksCount = (tasksCount) => ({type: SET_TOTAL_TASKS_COUNT, tasksCount});
const enterAdminMode = (adminLoggedIn) => ({type: ENTER_ADMIN_MODE, adminLoggedIn});
const setAuthToken = (authToken) => ({type: SET_AUTH_TOKEN, authToken});
const showFeedbackOnCreation = (feedback) => ({type: SHOW_FEEDBACK_ON_CREATION, feedback});
const showFeedbackOnAdminLogIn = (feedback) => ({type: SHOW_FEEDBACK_ON_ADMIN_LOG_IN, feedback});
const addToEditedIds = (id, text) => ({type: ADD_TO_EDITED_IDS, id, text});
export const enterEditMode = (editModeId) => ({type: ENTER_EDIT_MODE, editModeId});
export const saveSort = (sortType, sortDirection) => ({type: SAVE_SORT, sortType, sortDirection});
export const exitAdminMode = () => ({type: EXIT_ADMIN_MODE});
export const closeMessages = () => ({type: CLOSE_MESSAGES});

export const getTasks = (sortField, sortDirection, page) => {
  return (dispatch) => {
    tasksAPI.fetchTasks(sortField, sortDirection, page)
    	.then(res => {
    		dispatch(displayTasks(res.data.message.tasks));
    		dispatch(setTotalTasksCount(res.data.message.total_task_count));
    	});
	}
};

export const createNewTask = (formData) => {
	return (dispatch) => { 
		tasksAPI.createTask(formData)
			.then(result => {
				result.status === 'ok' 
					? dispatch(showFeedbackOnCreation('A new task has been created!'))
					: dispatch(showFeedbackOnCreation('Invalid email'));
			});
	};
}

export const logAsAdmin = (formData) => {
	return (dispatch) => {
		tasksAPI.logIn(formData)
			.then(result => {
				if (result.status === 'ok') {
					dispatch(enterAdminMode(true));
					dispatch(setAuthToken(result.message.token));
				} else {
					dispatch(enterAdminMode(false));
					dispatch(showFeedbackOnAdminLogIn('Wrong password or login'))
				} 
			});
	}
}

export const editTask = (token, id, status, text) => {
	return (dispatch) => {
		if (text) dispatch(addToEditedIds(id, text));
		tasksAPI.editTask(token, id, status, text);
	}
}

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export default tasksReducer;