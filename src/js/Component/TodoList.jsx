import React, { useState } from "react";

//Components
import AddButton from "./AddButton.jsx";
import Input from "./Input.jsx";
import List from "./List.jsx";

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
		<div className="container">
			<div className="row">
				<div className="col d-flex justify-content-center">
					<h1>TODO List</h1>
				</div>
				<div className="row d-flex justify-content-center m-2">
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
		</div>
	);
};

export default TodoList;
