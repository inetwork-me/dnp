import ProductsSkelton from "@/app/_components/productsSkelton/ProductsSkelton";

const loading = () => {
	return (
		<div className='w-full flex items-start content-start flex-wrap gap-8'>
			<ProductsSkelton />
		</div>
	);
};

export default loading;
