import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Rating({
	maxRating = 5,
	color = "#FBBF24", // أصفر واضح
	size = 32,
	className = "flex items-center gap-4",
	defaultRating = 0,
	onSetRating = () => {},
}) {
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	function handleRating(r) {
		setRating(r);
		onSetRating(r);
	}

	function handleTempRating(r) {
		setTempRating(r);
	}

	return (
		<div className={className}>
			<div className='flex items-center gap-[8px]'>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						key={i}
						isFull={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onRating={() => handleRating(i + 1)}
						onHoverEnter={() => handleTempRating(i + 1)}
						onHoverLeave={() => handleTempRating(0)}
						size={size}
						color={color}
					/>
				))}
			</div>

			{/* Display rating number */}
			<div className='flex items-center gap-1 text-[20px] font-medium'>
				<span className='text-black'>{tempRating || rating || 0}</span>
				<span className='text-gray-400'>/ {maxRating}</span>
			</div>
		</div>
	);
}

function Star({ isFull, onRating, onHoverEnter, onHoverLeave, size, color }) {
	const starStyle = {
		width: `${size}px`,
		height: `${size}px`,
		cursor: "pointer",
		display: "block",
	};

	return (
		<span
			role='button'
			style={starStyle}
			onClick={onRating}
			onMouseEnter={onHoverEnter}
			onMouseLeave={onHoverLeave}>
			{isFull ? (
				// Filled star
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill={color}
					stroke={color}>
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				</svg>
			) : (
				// Empty outlined star
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke={color}
					strokeWidth={1.5}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
					/>
				</svg>
			)}
		</span>
	);
}

Rating.propTypes = {
	maxRating: PropTypes.number,
	color: PropTypes.string,
	size: PropTypes.number,
	className: PropTypes.string,
	defaultRating: PropTypes.number,
	onSetRating: PropTypes.func,
};
