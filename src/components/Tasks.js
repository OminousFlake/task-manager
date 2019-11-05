import React, { useEffect } from 'react';
import Sorting from './Sorting.js';
import Task from './Task.js';
import './styles.css';

const Tasks = (props) => {

	useEffect(() => {
		props.getTasks(props.sortType, props.sortDirection, props.currentPage);
	}, [props.currentPage])

	const changePages = (page) => {
		props.setCurrentPage(page);
	}

	const pagesCount = Math.ceil(props.totalTasksCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	const tasks = props.tasks.map(el => {
				return <Task username={el.username}
							email={el.email}
							text={el.text}
							status={el.status}
							key={el.id}
							id={el.id}
							{...props}
						/>
			});

	return (
		<div>
			<Sorting { ...props } />
			<div className="tasksContainer">
				{ tasks }
			</div>
			<div className="pages">
				{pages.map((el, index) => {
						return <span key={index} 
									className={props.currentPage === el ? 'page-selected' : undefined}
									onClick={() => changePages(el)}
								>
								{el}
								</span>
					})
				}
			</div>
		</div>
		
	)
}

export default Tasks;