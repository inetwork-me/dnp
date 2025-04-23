import React from "react";
import TabNavItem from "./TabNavItem";

const TabNavContainer = ({ profileData }) => {
	return (
		<div className='w-full flex flex-col items-start gap-2.5  p-0'>
			{profileData.map((item) => (
				<TabNavItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default TabNavContainer;
