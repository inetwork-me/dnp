"use client";

const Button = ({ className, to, children }) => {
	const handleNavigate = () => {
		// Add navigation logic here
		console.log("Navigating to:", to);
	};

	return (
		<button className={`${className} cursor-pointer`} onClick={handleNavigate}>
			{children}
		</button>
	);
};

export default Button;
