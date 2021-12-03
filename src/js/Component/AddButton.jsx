import React from "react";
import PropTypes from "prop-types";

const AddButton = props => (
	<button type="button" role="button" onClick={props.onClickBut}>
		Add
	</button>
);

AddButton.propTypes = {
	onClickBut: PropTypes.func
};

export default AddButton;
