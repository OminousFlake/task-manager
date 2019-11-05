import {connect} from "react-redux";
import StartingPage from "./StartingPage.js";
import {
	getTasks,
	setCurrentPage,
	logAsAdmin,
	enterEditMode,
    exitAdminMode,
	saveSort,
    editTask,
    createNewTask,
    closeMessages
}  from "./../store/reducers/tasksReducer.js";


const mapStateToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
        pageSize: state.tasksPage.pageSize,
        totalTasksCount: state.tasksPage.totalTasksCount,
        currentPage: state.tasksPage.currentPage,
        isAdmin: state.tasksPage.isAdmin,
        editModeId: state.tasksPage.editModeId,
        sortType: state.tasksPage.sortType,
        sortDirection: state.tasksPage.sortDirection,
        authToken: state.tasksPage.authToken,
        feedbackOnCreation: state.tasksPage.feedbackOnCreation,
        feedbackOnAdminLogIn: state.tasksPage.feedbackOnAdminLogIn,
        idsEditedByAdmin: state.tasksPage.idsEditedByAdmin
    }
};

const StartingPageContainer = connect(mapStateToProps, 
	{ getTasks, setCurrentPage, logAsAdmin, 
        enterEditMode, exitAdminMode, saveSort,
        editTask, createNewTask, closeMessages })(StartingPage);


export default StartingPageContainer;