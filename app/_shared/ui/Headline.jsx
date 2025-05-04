const Headline = ({
	titleClassName = "text-[40px] leading-[51px] font-semibold text-gray-950 ",
	HeadlineAlign = "items-start",
	title,
	description,
	mb = "mb-4",
}) => {
	return (
		<div
			className={`flex flex-col  ${HeadlineAlign}  gap-4 p-0 text-start ${mb} `}>
			<h2 className={titleClassName}>{title}</h2>
			<p className='text-lg font-normal leading-7 text-gray-700 '>
				{description}
			</p>
		</div>
	);
};

export default Headline;
