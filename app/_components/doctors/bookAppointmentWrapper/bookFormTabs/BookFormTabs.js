"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

// COMPONENTS
import TabsWrapper from "./TabsWrapper";

// DATA FOR TABS
import { bookAppointmentTabs } from "@/fakeData/data";
import TabContent from "./tabContent/TabContent";

const BookFormTabs = () => {
	const t = useTranslations("app");

	const [activeTab, setActiveTab] = useState(bookAppointmentTabs[0].id);

	const handleTabClick = (id) => {
		setActiveTab(id);
	};

	return (
		<div className='w-full col-span-3 flex flex-col gap-6'>
			<TabsWrapper
				activeTab={activeTab}
				handleTabClick={handleTabClick}
				bookAppointmentTabs={bookAppointmentTabs}
			/>

			<TabContent activeTab={activeTab} setActiveTab={setActiveTab} t={t} />
		</div>
	);
};

export default BookFormTabs;
