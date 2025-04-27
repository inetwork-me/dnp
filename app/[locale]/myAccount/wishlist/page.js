import { useTranslations } from "next-intl";
import ContentHeader from "@/app/_components/myAccountContainer/ContentHeader";
import WishlistContainer from "@/app/_components/myAccountContainer/wishlist/WishlistContainer";

const page = () => {
	const t = useTranslations("app");

	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader title={t("Wishlist")} />
			<WishlistContainer t={t} />
		</div>
	);
};

export default page;
