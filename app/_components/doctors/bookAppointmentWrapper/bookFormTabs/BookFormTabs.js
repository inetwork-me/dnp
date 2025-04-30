"use client";

import { Tabs } from "@/app/_shared/ui/tabs";

import { useTranslations } from "next-intl";
import TabsListWarper from "./TabsListWarper";
import TabsContentWrapper from "./tabsContentWrapper/TabsContentWrapper";

import { bookAppointmentTabs } from "@/fakeData/data";
import { useState } from "react";
const BookFormTabs = () => {
	const t = useTranslations("app");

	const [activeTab, setActiveTab] = useState(bookAppointmentTabs[0].tab);

	const handleTabClick = (id) => {
		setActiveTab(id);
	};

	return (
		<Tabs
			className='w-full col-span-3 flex flex-col gap-6'
			defaultValue={activeTab}>
			<TabsListWarper
				handleTabClick={handleTabClick}
				bookAppointmentTabs={bookAppointmentTabs}
			/>

			<TabsContentWrapper activeTab={activeTab} />
		</Tabs>
	);
};

export default BookFormTabs;
