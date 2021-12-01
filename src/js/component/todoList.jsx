import React, { useState } from "react";
import AddButton from "./addButton.jsx";
import Input from "./input.jsx";
import List from "./list.jsx";

const TodoList = () => {
	const [list, setList] = useState([]);
	const [task, setTask] = useState([]);

	const addTask = () => {
		const newList = list.concat([task]);
		setList(newList);
		setTask("");
	};

	function pressEnter(ev) {
		if (ev.key === "Enter") addTask();
	}

	return (
		<div className="container todoList">
			<div className="title">
				<h1>TODO List</h1>
			</div>
			<div>
				<Input
					valueInp={task}
					onChangeInp={ev => {
						setTask(ev.target.value);
					}}
					onKeyPressInp={task.length > 0 ? pressEnter : null}
				/>
				<AddButton onClickBut={task.length > 0 ? addTask : null} />
			</div>
			<div>
				<List setList={setList} list={list} />
			</div>
		</div>
	);
};

export default TodoList;
