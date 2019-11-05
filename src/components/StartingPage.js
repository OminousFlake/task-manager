import React from 'react';
import './styles.css';
import Tasks from './Tasks.js';
import AdminLoginForm from './AdminLoginForm.js';
import ReduxCreateTaskForm from './CreateTaskForm.js';

const StartingPage = (props) => {

	const onCreateSubmit = (formData) => {
		props.createNewTask(formData);
		props.getTasks(null, null, props.currentPage);
	}

	const onLoginSubmit = (formData) => {
		props.logAsAdmin(formData);
	}
	return (
		<main className="tasksPage">
			{props.isAdmin 
				? <div className="admin-log-out">
					<span onClick={props.exitAdminMode}>Log out</span>
				  </div>
				: <div className="adminLoginFormContainer">
					<AdminLoginForm onSubmit={ onLoginSubmit }/>
					<span onClick={props.closeMessages} className="showMessage">{props.feedbackOnAdminLogIn}</span>
				  </div>
			}
			<div className="createFormContainer">
				<ReduxCreateTaskForm onSubmit={ onCreateSubmit }/>
				<span onClick={props.closeMessages} className="showMessage">{props.feedbackOnCreation}</span>
			</div>
			<div className="tasksContainer">
				<h1>Tasks</h1>
				<Tasks {...props}/>
			</div>
		</main>
	)
}

export default StartingPage;