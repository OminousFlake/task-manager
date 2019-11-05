import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea, TextInput } from './FormsControl.js';
import { requiredField } from './validte.js';

const CreateTaskForm = (props) => {
	return (
		<form onSubmit={ props.handleSubmit } className="createForm">
			<h2>Create new task</h2>
			<div className="createForm-field createForm-user">
				<label htmlFor="username">Username</label>
				<Field component={ TextInput } 
						type="text" 
						value="" 
						placeholder="enter your username" 
						name="username"
						validate={[requiredField]}
				/>
			</div>
			<div className="createForm-field createForm-email">
				<label htmlFor="email">Email</label>
				<Field 
					component={ TextInput } 
					type="email" 
					value="" 
					placeholder="enter your email" 
					name="email"
					validate={[requiredField]}
				/>
			</div>
			<div className="createForm-field createForm-text">
				<label htmlFor="text">Your text</label>
				<Field 
					component={ Textarea } 
					placeholder="enter your text" 
					name="text" 
					validate={[requiredField]}
				/>
			</div>
			<button>create</button>
		</form>
	)
}

const ReduxCreateTaskForm = reduxForm({	form: 'createTask' })(CreateTaskForm);

export default ReduxCreateTaskForm;