const Headline = ({
	titleClassName = "text-[40px] leading-[51px] font-semibold text-[#030712]",
	HeadlineAlign = "items-start",
	title,
	description,
	mb = "mb-4",
}) => {
	return (
		<div
			className={`flex flex-col justify-center ${HeadlineAlign} gap-4 p-0 text-start ${mb} `}>
			<h2 className={titleClassName}>{title}</h2>
			<p className='text-lg font-normal leading-7 text-[#4B5563] '>
				{description}
			</p>
		</div>
	);
};

export default Headline;
