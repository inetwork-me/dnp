import Badge from "@/app/_shared/ui/Badge";

const PackageInfo = ({ t }) => {
	return (
		<div className='w-full flex items-center self-stretch'>
			<div className='flex-1 flex  items-center gap-3'>
				<h6 className='text-xl font-semibold text-gray-950'>
					Titanium Package
				</h6>

				<p className='flex items-center justify-center gap-2 py-1 px-2.5 rounded-full border border-[#723881]'>
					Online Session
				</p>

				<div className='h-[32px] w-[1px] border border-gray-200' />

				<p className='text-[16px] font-normal leading-7 text-gray-700'>
					{t("remainingDays")} 14 Days
				</p>
			</div>
			<Badge badge='active' className='text-gray-950 bg-[#86EFAC]' />
		</div>
	);
};

export default PackageInfo;
