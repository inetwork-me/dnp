import Image from "next/image";
import Currency from "../../../_shared/ui/Currency";

import { Button } from "@/app/_shared/ui/button";

const WishlIstItem = ({ product, t }) => {
	return (
		<div
			key={product.id}
			className='w-full flex md:flex-row flex-col items-start gap-4 py-5 last:border-none  border-b border-gray-200'>
			<div className='relative w-[103px] h-[103px] flex justify-center items-center rounded-xl overflow-hidden'>
				<Image
					src={product.image}
					alt={product.title}
					width={100}
					height={100}
					className='w-full h-full  object-cover'
				/>
			</div>

			<div className='flex-2 flex flex-col items-start gap-3'>
				<h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
				<p className='text-[16px] leading-7 font-medium text-gray-600 '>
					{t("Category")}
				</p>
				<Currency
					className='text-lg font-semibold text-gray-950'
					amount={817}
				/>
			</div>

			<div className='flex-1 flex flex-col items-center gap-4'>
				<Button size='default'>{t("addToCart")}</Button>
				<Button variant='outline' size='default'>
					{t("removeItem")}
				</Button>
			</div>
		</div>
	);
};

export default WishlIstItem;
