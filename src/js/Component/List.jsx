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
					<div className="d-flex justify-content-center">
						<li
							className="d-inline my-2 mx-3 fs-4 border-bottom border-secondary border-2"
							key={i}>
							{item}
						</li>
						<button
							className="d-inline my-2 mx-3 btn btn-danger"
							onClick={() => deleteTask(i)}>
							Delete
						</button>
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
