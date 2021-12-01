import React from "react";
import PropTypes from "prop-types";

const Input = props => (
	<input
		type="text"
		value={props.valueInp}
		onChange={props.onChangeInp}
		placeholder="Task"
		onKeyPress={props.onKeyPressInp}
	/>
);

Input.propTypes = {
	valueInp: PropTypes.object,
	onChangeInp: PropTypes.func,
	onKeyPressInp: PropTypes.func
};

export default Input;
