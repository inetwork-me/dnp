import { TabsContent } from "@radix-ui/react-tabs";
import ChooseDoctor from "./tabsContentInputs/ChooseDoctor";
import PersonalData from "./tabsContentInputs/PersonalData";
import PickDate from "./tabsContentInputs/PickDate";
import Payment from "./tabsContentInputs/Payment";
import { useTranslations } from "next-intl";

const TabsContentWrapper = ({ activeTab }) => {
	const t = useTranslations("app");
	return (
		<TabsContent value={activeTab}>
			<form>
				{activeTab === 1 && <ChooseDoctor t={t} />}
				{activeTab === 2 && <PersonalData t={t} />}
				{activeTab === 3 && <PickDate t={t} />}
				{activeTab === 4 && <Payment t={t} />}
			</form>
		</TabsContent>
	);
};

export default TabsContentWrapper;
