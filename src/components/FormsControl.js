import React from 'react';

export const Textarea = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div>
			<textarea {...input} {...props} className={hasError ? 'withError' : undefined}/>
			<div>
				{ hasError && <span className="errorMessage">{meta.error}</span> }
			</div>
		</div>

	)
}

export const TextInput = ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div>
			<input {...input} {...props} 
				className={hasError ? 'withError' : undefined}
			/>
			<div>
				{ hasError && <span className="errorMessage">{meta.error}</span> }
			</div>
		</div>

	)
}