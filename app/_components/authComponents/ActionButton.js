const ActionButton = ({
	onClick,
	disabled,
	type = "button",

	className = " h-[59px] rounded-xl",
	outline,
	children,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full ${className} flex items-center justify-center  cursor-pointer text-bse font-medium    
            transition ${outline ? "btn-outline-bg" : "btn-bg"}`}>
			{children}
		</button>
	);
};

export default ActionButton;
