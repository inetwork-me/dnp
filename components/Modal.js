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
				{/* Content */}
				{children}
			</div>
		</div>
	);
};

export default Modal;
