import { TabsList, TabsTrigger } from "@/app/_shared/ui/tabs";
import { useTranslations } from "next-intl";

const TabsListWarper = ({ bookAppointmentTabs, handleTabClick }) => {
	const t = useTranslations("app");

	return (
		<TabsList className={"w-full grid grid-cols-4 gap-8 bg-transparent h-12"}>
			{bookAppointmentTabs.map((tab) => (
				<TabsTrigger
					onClick={() => handleTabClick(tab.id)}
					className={
						"col-span-1 h-full py-2 px-4 rounded-lg bg-transparent text-[#723881] text-base font-medium cursor-pointer hover:bg-[#ECDAF4] hover:border-transparent transition-all duration-200 focus:bg-[#ECDAF4] focus:outline-none focus:ring-0"
					}
					key={tab.id}
					value={tab.id}>
					<span className='w-6 h-6 rounded-full bg-[#723881] flex justify-center items-center text-base text-white font-medium'>
						{tab.id}
					</span>
					{t(tab.tab)}
				</TabsTrigger>
			))}
		</TabsList>
	);
};

export default TabsListWarper;
