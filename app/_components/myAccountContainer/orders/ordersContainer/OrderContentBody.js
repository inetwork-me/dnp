import ProductsListItem from "./ProductsListItem";

const OrderContentBody = ({ t, products }) => {
	return (
		<div className='w-full flex  flex-col items-start self-stretch'>
			<div className='w-full flex flex-col items-start gap-6'>
				{products.map((product) => (
					<ProductsListItem key={product.id} product={product} t={t} />
				))}
			</div>
		</div>
	);
};

export default OrderContentBody;
