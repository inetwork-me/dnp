import { useState } from "react";

const RememberMe = ({ t }) => {
	const [rememberMe, setRememberMe] = useState(false);
	return (
		<div className='flex items-center gap-2'>
			<label className='flex items-center gap-2 cursor-pointer'>
				<input
					type='checkbox'
					id='remember'
					className='hidden'
					onChange={() => setRememberMe(!rememberMe)}
				/>
				<div className='w-5 h-5 flex items-center justify-center rounded border border-gray-300 bg-white checked:border-[#954CAD] relative'>
					{rememberMe && (
						<svg
							className='w-4 h-4 text-[#954CAD] absolute'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M5 13L9 17L19 7'
								stroke='currentColor'
								strokeWidth='3'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					)}
				</div>
				<span className='text-sm text-gray-500 font-medium'>
					{t("Remember me")}
				</span>
			</label>
		</div>
	);
};

export default RememberMe;
