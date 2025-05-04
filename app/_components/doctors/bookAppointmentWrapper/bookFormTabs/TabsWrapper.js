import { Button } from "@/app/_shared/ui/button";
import { useTranslations } from "next-intl";

const TabsWrapper = ({ bookAppointmentTabs, handleTabClick, activeTab, defaultValue }) => {
	const t = useTranslations("app");

	return (
		<div className='w-full grid grid-cols-4 gap-4 bg-transparent'>
			{bookAppointmentTabs.map((tab) => {
				// A step is completed if the activeTab is equal to or greater than the tab's id
				const isCompleted = activeTab >= tab.id;

				return (
					<Button
						variant='ghost'
						onClick={() => handleTabClick(tab.id)}
						className={`
							col-span-1 py-5 px-4 rounded-lg flex items-center gap-3 transition-all duration-100 hover:bg-[#ECDAF4]   border hover:!border-transparent  shadow-none
							focus:outline-none focus:ring-0
							${
								isCompleted
									? "bg-[#ECDAF4] text-[#723881] font-medium"
									: "bg-transparent text-[#723881] font-medium !border-[#723881]"
							}
						`}
						key={tab.id}
						value={tab.id}>
						<span
							className={`
							w-6 h-6 rounded-full flex justify-center items-center text-base font-medium text-white
							${isCompleted ? "bg-[#723881] " : "bg-[#723881] "}
						`}>
							{tab.id}
						</span>
						{t(tab.tab)}
					</Button>
				);
			})}
		</div>
	);
};

export default TabsWrapper;
