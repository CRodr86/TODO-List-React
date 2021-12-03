import React from "react";
import PropTypes from "prop-types";

const List = props => {
	function deleteTask(index) {
		props.setList(props.list.filter((task, i) => i !== index));
	}

	return (
		<ul>
			{props.list.map((item, i) => (
				<>
					<div className="task">
						<li key={i}>{item}</li>
						<button onClick={() => deleteTask(i)}>Delete</button>
					</div>
				</>
			))}
		</ul>
	);
};

List.propTypes = {
	list: PropTypes.object,
	setList: PropTypes.func
};

export default List;
