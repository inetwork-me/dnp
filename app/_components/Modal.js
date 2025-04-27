// components/Modal.js
import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, children, title }) => {
	const modalRef = useRef();
	const [show, setShow] = useState(false);

	// ✅ Handle open/close + scroll blocking
	useEffect(() => {
		if (isOpen) {
			setShow(true);
			document.body.style.overflow = "hidden"; // stop scrolling
		} else {
			document.body.style.overflow = ""; // allow scrolling
			const timeout = setTimeout(() => setShow(false), 200); // delay for animation
			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	// ESC to close
	useEffect(() => {
		const handleEsc = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleEsc);
		return () => document.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	// Focus modal when open
	useEffect(() => {
		if (isOpen && modalRef.current) {
			modalRef.current.focus();
		}
	}, [isOpen]);

	if (!isOpen && !show) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-200 ${
				isOpen ? "bg-black/68 backdrop-blur-[1px]" : "bg-transparent"
			}`}
			onClick={onClose}>
			<div
				ref={modalRef}
				tabIndex={-1}
				role='dialog'
				aria-modal='true'
				aria-labelledby='modal-title'
				onClick={(e) => e.stopPropagation()}
				className={`relative bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 w-full max-w-lg focus:outline-none transform transition-all duration-200 ${
					isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
				}`}>
				<button
					className='absolute top-6 right-6 p-1 rounded-full text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer'
					onClick={onClose}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
				{/* Content */}
				{children}
			</div>
		</div>
	);
};

export default Modal;
