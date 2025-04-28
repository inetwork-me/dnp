import CancelSubButton from "./CancelSubButton";
import PackageInfoWrapper from "./PackageInfoWrapper";

<div className='flex flex-col items-start  gap-6'>ك</div>;

const SubscriptionsContainer = ({ t }) => {
	return (
		<div className='w-full flex flex-col items-start p-8 gap-8'>
			<div className='w-full flex flex-col items-start p-6 gap-8 bg-white rounded-2xl border border-gray-200 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.00)]'>
				<PackageInfoWrapper t={t} />
				<CancelSubButton t={t} />
			</div>
		</div>
	);
};

export default SubscriptionsContainer;
