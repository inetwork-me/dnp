const ContentHeader = ({ title, btnText, handleOnclick }) => {
	return (
		<div className='flex justify-between items-center py-5 px-8 border-b border-gray-200'>
			<h3 className='text-3xl font-semibold text-gray-950'>{title}</h3>

			{btnText ? (
				<button
					onClick={handleOnclick}
					className='flex justify-center items-center gap-1.5 bg-gray-100 border border-transparent hover:bg-white hover:border-gray-300 rounded-lg text-gray-800 text-[16px] leading-7 font-normal px-6 py-1.5 transition-all duration-100 ease-in-out cursor-pointer
					'>
					{btnText}
				</button>
			) : null}
		</div>
	);
};

export default ContentHeader;
