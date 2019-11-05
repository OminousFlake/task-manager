import React, { useState } from 'react';
import Edit from './Edit.js';

const Task = React.memo((props) => {
	const [text, setText] = useState(props.text);

	const changeTextBody = (text) => {
		setText(text);
	}

	const toggleEditMode = (id) => {
		props.enterEditMode(props.editModeId === id ? null : id);
	}

	const handleCLick = (evt) => {
		if (!props.status) {
			props.editTask(props.authToken, props.id, 10, null);
			props.getTasks(props.sortType, props.sortDirection, props.currentPage);
		} else {
			props.editTask(props.authToken, props.id, 0, null);
			props.getTasks(props.sortType, props.sortDirection, props.currentPage);
		}

		return props.status ? 'checked' : 'unchecked';
	}

	const saveChanges = () => {
		props.editTask(props.authToken, props.id, props.status, text);
		toggleEditMode(props.id);
		props.getTasks(props.sortType, props.sortDirection, props.currentPage);
	}
	
	const findIfEdited = (ids, id) => {
		return ids.some(el => el === id);
	}

	const showStatus = (status, isEdited) => {
		if (status && isEdited(props.idsEditedByAdmin, props.id)) {
			return 'edited by admin / complete';
		} else if (status) {
			return 'complete';
		} else if (!status && isEdited(props.idsEditedByAdmin, props.id)) {
			return 'edited by admin / pending';
		} else {
			return 'pending';
		}
	}

	return (
		<form className="task">
			<div className="task-header">
				<h3>Task #{props.id}</h3>
				{props.isAdmin && <div onClick={() => toggleEditMode(props.id)}>
					<Edit symbol={'✏'}/>
				</div>
				}
				{props.isAdmin && props.editModeId === props.id 
					&& <div className="task-header_save" 
							onClick={() => saveChanges()}>
					<span>save</span>
				</div>}
			</div>
			<div className="task-info task-username">
				<label htmlFor="username">Username:</label>
				<p>{props.username}</p>
			</div>
			<div className="task-info task-email">
				<label htmlFor="email">Email:</label>
				<p>{props.email}</p>
			</div>
			<div className="task-info task-text">
				<label htmlFor="text">Text:</label>
				{props.isAdmin && props.editModeId === props.id 
					? <input 
						type="text" 
						value={text} 
						name="text" 
						onChange={(event) => changeTextBody(event.target.value)}/>
					: <p>{text}</p>
				}
			</div>
			<div className="task-info task-done">
				<label htmlFor="status">Status</label>
				{props.isAdmin && props.editModeId === props.id
					? <input type="checkbox" name="status" onChange={() => handleCLick()} defaultChecked={!!props.status} />
					: <p>{showStatus(props.status, findIfEdited)}</p>
				}
			</div>
		</form>
	)
});

export default Task;