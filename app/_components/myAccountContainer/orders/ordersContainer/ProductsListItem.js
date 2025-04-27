import Currency from "@/app/_components/Currency";
import Image from "next/image";

const ProductsListItem = ({ product, t }) => {
	return (
		<div
			key={product.id}
			className='w-full flex md:flex-row flex-col items-start gap-4 py-5  border-b border-gray-200'>
			<div className='relative w-[103px] h-[103px] flex justify-center items-center rounded-xl overflow-hidden'>
				<Image
					src={product.image}
					alt={product.title}
					width={100}
					height={100}
					className='w-full h-full  object-cover'
				/>
			</div>

			<div className='flex-1 flex flex-col items-start gap-3'>
				<h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
				<p className='text-[16px] leading-7 font-medium text-gray-600 '>
					{t("Sold by")}:{" "}
					<span className='text-[#B26BCA] underline cursor-pointer'>
						{product.vendor}
					</span>
				</p>
				<Currency
					className='text-lg font-semibold text-gray-950'
					amount={product.price}
				/>
			</div>

			<button className='w-6 h-6 flex justify-center items-center  cursor-pointer'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'>
					<path
						d='M18 6.00005L6 18M5.99995 6L17.9999 18'
						stroke='#6B7280'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</button>
		</div>
	);
};

export default ProductsListItem;
