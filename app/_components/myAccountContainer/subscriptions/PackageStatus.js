const PackageStatus = ({ t }) => {
	return (
		<div className='flex items-center py-1 px-2.5 rounded-full  bg-[#86EFAC] text-sm font-medium text-gray-950'>
			{t("active")}
		</div>
	);
};

export default PackageStatus;
