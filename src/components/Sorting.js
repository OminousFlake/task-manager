import React from 'react';
import Emoji from './Emoji.js';

const Sorting = (props) => {
	const [userOption, emailOption, statusOption] = ['username', 'email', 'status'];
	const toggleSortMode = (sortType, sortDirection) => {
		props.saveSort(sortType, sortDirection);
		props.getTasks(sortType, sortDirection, props.currentPage);
		props.setCurrentPage(1);
	}

	const chooseDirection = (sortOption) => {
		if (props.sortType === sortOption) {
			return !props.sortDirection || props.sortDirection === 'desc' ? 'asc' : 'desc';
		} else {	
			return 'asc';
		}
	}

	return (
		<div>
			<span className="sorting-header">Sort by</span>
			<button className={props.sortType === userOption ? 'sort active-sort' : 'sort non-active-sort' }
					onClick={() => toggleSortMode(userOption, chooseDirection(userOption))}
			>
				name {props.sortType === userOption && <span >{ props.sortDirection 
									? props.sortDirection === 'asc' 
										? <Emoji label='ascending' symbol='🔺'/>
										: <Emoji label='descending' symbol='🔻'/>
									: ''}
							</span>}
			</button>

			<button className={props.sortType === emailOption ? 'sort active-sort' : 'sort non-active-sort' }
					onClick={() => toggleSortMode(emailOption, chooseDirection(emailOption))}
			>
				email{props.sortType === emailOption && <span >{ props.sortDirection 
									? props.sortDirection === 'asc' 
										? <Emoji label='ascending' symbol='🔺'/>
										: <Emoji label='descending' symbol='🔻'/>
									: ''}
							</span>}
			</button>
			<button onClick={() => toggleSortMode(statusOption, chooseDirection(statusOption))}
					className={props.sortType === statusOption ? 'sort active-sort' : 'sort non-active-sort' }
			>
				status{props.sortType === statusOption && <span >{ props.sortDirection 
									? props.sortDirection === 'asc' 
										? <Emoji label='ascending' symbol='🔺'/>
										: <Emoji label='descending' symbol='🔻'/>
									: ''}
							</span>}
			</button>
		</div>
		
	)
}


export default Sorting;