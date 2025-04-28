import { useTranslations } from "next-intl";
import LinkGroup from "./LinkGroup";
import { footerLinks } from "@/fakeData/data";

const LinksWrapper = () => {
	const t = useTranslations("app");

	return (
		<ul className='col-span-5 grid grid-cols-5  p-0'>
			{footerLinks.map(({ id, headLine, links }) => {
				return (
					<LinkGroup key={id} t={t} headLine={t(headLine)} links={links} />
				);
			})}
		</ul>
	);
};

export default LinksWrapper;
