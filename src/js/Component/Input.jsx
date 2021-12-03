import React from "react";
import PropTypes from "prop-types";

const Input = props => (
	<input
		className="col-6"
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
