const PackageFeatures = ({ features }) => {
	return (
		<div className='min-h-[164px] space-y-4'>
			{features.map((item) => (
				<p className='flex items-center gap-2'>
					<span className='w-3 h-3 flex justify-center items-center border border-[#723881] rounded-full  bg-[#723881] '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='12'
							height='13'
							viewBox='0 0 12 13'
							fill='none'>
							<path
								d='M3 7.313L3.803 8.174C4.246 8.649 4.4675 8.886 4.7155 8.961C4.9335 9.0265 5.1655 9.009 5.373 8.911C5.6095 8.799 5.799 8.5305 6.179 7.993L9 4'
								stroke='white'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</span>
					<span className='text-lg font-medium text-gray-700'>
						{item.feature}
					</span>
				</p>
			))}
		</div>
	);
};

export default PackageFeatures;
