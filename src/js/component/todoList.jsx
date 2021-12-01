import React, { useState } from "react";
import Input from "./input.jsx";

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

	function deleteTask(index) {
		setList(list.filter((task, i) => i !== index));
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
				<button
					type="button"
					role="button"
					onClick={task.length > 0 ? addTask : null}>
					Add
				</button>
			</div>
			<div>
				<ul>
					{list.map((item, i) => (
						<>
							<li key={i}>{item}</li>
							<button onClick={() => deleteTask(i)}>
								Delete
							</button>
						</>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
