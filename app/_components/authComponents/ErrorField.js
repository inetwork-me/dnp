import React from "react";

const ErrorField = ({ t, touched, error }) => {
	return (
		<>
			{touched && error && <p className='text-red-500 text-sm'>{t(error)}</p>}
		</>
	);
};

export default ErrorField;
