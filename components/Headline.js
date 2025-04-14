const Headline = ({ title, description }) => {
	return (
		<div className='flex flex-col justify-center items-start gap-4 p-0 text-start mb-6'>
			<h2 className=' text-[40px] leading-[51px] font-semibold text-[#030712]'>
				{title}
			</h2>
			<p className='text-lg font-normal leading-7 text-[#4B5563] '>
				{description}
			</p>
		</div>
	);
};

export default Headline;
