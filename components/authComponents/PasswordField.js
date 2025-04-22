import React, { useState } from "react";
import OpenEye from "./OpenEye";
import ClosedEye from "./ClosedEye";
import ErrorField from "./ErrorField";

const inputClassName =
	"w-full h-[49px] text-sm text-black placeholder:text-gray-500 py-3 px-5 border border-gray-300 bg-white rounded-lg box-border hover:border-[#B26BCA] focus:border-[#B26BCA] focus:outline-none";

const PasswordField = ({
	t,
	name = "password",
	error,
	touched,
	value,
	placeholder = "Password",
	formik,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className='w-full flex-col  flex items-start'>
			<div
				className={`w-full flex items-center gap-2 justify-between ${inputClassName}`}>
				<input
					name={name}
					type={showPassword ? "text" : "password"}
					placeholder={t(placeholder)}
					className='w-full h-full text-sm text-black placeholder:text-gray-500 bg-transparent  focus:outline-none'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={value}
				/>
				<span
					onClick={() => setShowPassword((prev) => !prev)}
					className='w-5 h-full bg-transparent cursor-pointer '>
					{!showPassword ? <OpenEye /> : <ClosedEye />}
				</span>
			</div>
			<ErrorField touched={touched} error={error} t={t} />
		</div>
	);
};

export default PasswordField;
