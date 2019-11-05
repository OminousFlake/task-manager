import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextInput } from './FormsControl.js';
import { requiredField } from './validte.js';

const AdminLoginForm = (props) => {
	return (
		<form className="adminLoginForm" onSubmit={ props.handleSubmit }>
		<div className="adminLoginForm-field adminLoginForm-username">
			<label htmlFor="username">Admin</label>
			<Field component={ TextInput } 
					type="text" 
					value="" 
					placeholder="enter your username" 
					name="username"
					validate={[requiredField]}
			/>
		</div>
		<div className="adminLoginForm-field adminLoginForm-password">
			<label htmlFor="password">Password</label>
			<Field component={ TextInput } 
				type="password" 
				value="" 
				placeholder="enter your password" 
				name="password"
				validate={[requiredField]}
			/>
		</div>
			<button className="adminLoginForm-loginButton">login</button>
		</form>
	)
}

const ReduxAdminLoginForm = reduxForm({ form: 'adminLogin' })(AdminLoginForm);

export default ReduxAdminLoginForm;
