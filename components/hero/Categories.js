import Link from "next/link";

// icons
import ArrowRightIcon from "@/public/icons/arrow-right.svg";
import ListIcon from "@/public/icons/list.svg";
import { useTranslations } from "next-intl";

const Categories = () => {
	const t = useTranslations("app");

	const categoriesList = [
		{ name: t("categories.sportsNutrition"), slug: "sportsNutrition" },
		{ name: t("categories.bodyBuilder"), slug: "bodyBuilder" },
		{ name: t("categories.optimumNutrition"), slug: "optimumNutrition" },
		{ name: t("categories.topSelling"), slug: "topSelling" },
		{ name: t("categories.topProducts"), slug: "topProducts" },
		{ name: t("categories.healthPackages"), slug: "healthPackages" },
	];
	return (
		<aside className='w-[297px] min-h-[300px] flex flex-col rounded-xl filter-drop-shadow bg-white'>
			<h3 className='bg-[#723881] text-white py-3 px-4 text-lg font-medium flex items-center gap-2 rounded-tl-xl rounded-tr-xl'>
				<ListIcon className='' /> {t("categories.title")}
			</h3>
			<ul>
				{categoriesList.length > 0 ? (
					categoriesList.map((category, index) => (
						<li
							key={index}
							className=' border-b border-gray-200  last:border-b-0 '>
							<Link
								href={`/category/${category.slug}`}
								className={`h-full  px-4 py-3   hover:bg-gray-100 text-gray-600 hover:text-gray-700 transition-colors flex items-center justify-between  ${
									index === categoriesList.length - 1 ? "rounded-b-xl" : ""
								}`}>
								{category.name}
								<ArrowRightIcon className=' text-gray-600 rtl:rotate-180' />
							</Link>
						</li>
					))
				) : (
					<li className='text-gray-600 px-4 py-3'>No categories available</li>
				)}
			</ul>
		</aside>
	);
};

export default Categories;
