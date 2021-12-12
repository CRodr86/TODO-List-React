import React from "react";
import ReactDOM from "react-dom";

//Styles
import "bootstrap";
import "../styles/index.scss";

//Components
import TodoList from "./Component/TodoList.jsx";

//Render
ReactDOM.render(<TodoList />, document.querySelector("#app"));
