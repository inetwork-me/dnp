import { useTranslations } from "next-intl";
import Form from "./FormContent/Form";

const TabContent = ({ activeTab, setActiveTab }) => {
	const t = useTranslations("app");
	return <Form activeTab={activeTab} setActiveTab={setActiveTab} t={t} />;
};

export default TabContent;
