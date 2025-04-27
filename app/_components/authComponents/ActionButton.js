const ActionButton = ({
	onClick,
	disabled,
	type = "button",
	btnSize = "w-full h-[59px]",
	outline,
	children,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${btnSize} flex items-center justify-center   cursor-pointer text-[16px] font-medium leading-[27px] rounded-xl  
            transition ${outline ? "btn-outline-bg" : "btn-bg "}`}>
			{children}
		</button>
	);
};

export default ActionButton;
