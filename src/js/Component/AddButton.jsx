import React from "react";
import PropTypes from "prop-types";

const AddButton = props => (
	<button
		className="col-2 p-1 ms-2 btn btn-success"
		type="button"
		role="button"
		onClick={props.onClickBut}>
		Add
	</button>
);

AddButton.propTypes = {
	onClickBut: PropTypes.func
};

export default AddButton;
