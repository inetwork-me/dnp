import React from "react";
import BundlesCard from "./BundlesCard";
import { bundleList } from "@/fakeData/data";

const BundlesWrapper = ({ t }) => {
	return (
		<div className='w-full h-[232px] grid grid-cols-3 gap-8 p-0'>
			{bundleList.map((item) => (
				<BundlesCard key={item.id} item={item} t={t} />
			))}
		</div>
	);
};

export default BundlesWrapper;
