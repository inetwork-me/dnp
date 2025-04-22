import React from "react";

const ActionButton = ({
	onClick,
	disabled,
	type = "button",
	outline,
	children,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full h-[59px] cursor-pointer text-[16px] font-medium leading-[27px] rounded-xl  
            transition ${outline ? "btn-outline-bg" : "btn-bg "}`}>
			{children}
		</button>
	);
};

export default ActionButton;
