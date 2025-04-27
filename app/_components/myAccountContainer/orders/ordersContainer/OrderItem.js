import { useTranslations } from "next-intl";

import OrdersHeader from "./OrdersHeader.js";
import OrderContentFooter from "./OrderContentFooter.js";
import OrderContentBody from "./OrderContentBody.js";

const OrderItem = ({ order }) => {
	const t = useTranslations("app");

	return (
		<div className='w-full flex flex-col items-start border border-gray-200 rounded-xl gap-6 p-8 '>
			<OrdersHeader t={t} order={order} />

			<div className='w-full my-2 h-[1px] bg-gray-200' />

			<OrderContentBody products={order.products} t={t} />

			<OrderContentFooter t={t} order={order} />
		</div>
	);
};

export default OrderItem;
