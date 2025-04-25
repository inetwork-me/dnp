const SocialIcons = ({ icons }) => {
	return (
		<div className='flex gap-4'>
			{icons.map(({ id, icon }) => {
				return (
					<button key={id} className=' cursor-pointer'>
						{icon}
					</button>
				);
			})}
		</div>
	);
};

export default SocialIcons;
