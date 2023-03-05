import React, { useState } from 'react'

export const TaskCardTitle = () => {
	const [isClick, setIsClick] = useState(false);

	const [inputCardTitle, setInputCardTitle] = useState("Today");

	const handleClick = () => {
		setIsClick(true);
	};

	const handleChange = (event) => {
		setInputCardTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsClick(false);
	};

	const handleBlur = () => {
		setIsClick(false);
	}

	return (
		<div onClick={handleClick} className="taskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input type="text" autoFocus onChange={handleChange} onBlur={handleBlur} value={inputCardTitle} maxLength={10} className="taskCardTitleInput" />
				</form>
			):(
				<h3>{inputCardTitle}</h3>
			)}
		</div>
	);
};
