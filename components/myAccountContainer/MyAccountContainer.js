const MyAccountContainer = ({ children }) => {
	return (
		<section className='w-full min-h-[330px] flex flex-col items-start gap-6 p-8 bg-white border border-gray-200 rounded-xl box-border'>
			{children}
		</section>
	);
};

export default MyAccountContainer;
