import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Input from "./input.jsx";
import TodoList from "./todoList.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<TodoList></TodoList>
		</>
	);
};

export default Home;
