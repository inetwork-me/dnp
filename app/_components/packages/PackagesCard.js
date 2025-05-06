import PackageContent from "./PackageContent";

const PackagesCard = ({ pack }) => {
	return (
		<div
			className={`col-span-1 space-y-8 p-8 rounded-xl border-2  transition-all delay-150  ${
				pack.mostPopular
					? "border-[#723881]"
					: "border-gray-200 hover:border-[#723881]"
			}`}>
			<PackageContent pack={pack} />
		</div>
	);
};

export default PackagesCard;
