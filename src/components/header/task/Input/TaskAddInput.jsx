import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({inputText,setInputText,taskList,setTaskList}) => {
	const handleSubmit = (event) => {
		const taskId = uuid();
		// ページの更新を無効にする
		event.preventDefault();
		// テキストの無い状態はカードにしない
		if(inputText === "") {
			return
		};
		// カードを追加する
		setTaskList([
			...taskList,
			{
				id: taskId,
				draggableId: `task-${taskId}`,
				text: inputText,
				},
			]);
		setInputText("");
	};
	const handleChange = (event) => {
		setInputText(event.target.value);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='add a task' className="taskAddInput" onChange={handleChange} value={inputText} />
			</form>

		</div>
	)
}
