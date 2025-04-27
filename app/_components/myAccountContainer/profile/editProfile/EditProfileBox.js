import { useTranslations } from "next-intl";

import EditForm from "./EditForm";

const EditProfileBox = ({}) => {
	const t = useTranslations("app");
	return <EditForm t={t} />;
};

export default EditProfileBox;
