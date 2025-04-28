import { BillingInfoBtn } from "./BillingInfoBtn";
import PackagePrice from "./PackagePrice";
import PackageInfo from "./PackageInfo";

const PackageInfoWrapper = ({ t }) => {
	return (
		<div className='w-full flex flex-col items-start gap-6'>
			<div className='w-full flex flex-col items-start gap-6'>
				<PackageInfo t={t} />
				<PackagePrice t={t} />
				<BillingInfoBtn t={t} />
			</div>
		</div>
	);
};

export default PackageInfoWrapper;
