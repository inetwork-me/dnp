import Link from "next/link";

// icons
import ArrowRightIcon from "@/public/icons/arrow-right.svg";
import ListIcon from "@/public/icons/list.svg";

const categoriesList = [
	{ name: "Sports Nutrition", slug: "sportsNutrition" },
	{ name: "Body Builder", slug: "bodyBuilder" },
	{ name: "Optimum Nutrition", slug: "optimumNutrition" },
	{ name: "Top Selling", slug: "topSelling" },
	{ name: "Top products", slug: "topProducts" },
	{ name: "Health Packages", slug: "healthPackages" },
];

const Categories = () => {
	return (
		<aside className='w-[297px] min-h-[300px] flex flex-col rounded-xl filter-drop-shadow bg-white'>
			<h3 className='bg-[#723881] text-white py-3 px-4 text-lg font-medium flex items-center rounded-tl-xl rounded-tr-xl'>
				<ListIcon className=' mr-2' /> All Categories
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
								<ArrowRightIcon className=' text-gray-600' />
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
