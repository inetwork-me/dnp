import OrderItem from "./OrderItem";

// fake data
import { ordersList } from "@/fakeData/data";

const OrdersContentContainer = () => {
	return (
		<div className='w-full  flex flex-col items-start justify-start  gap-8 p-0'>
			{ordersList.map((order) => {
				return <OrderItem key={order.id} order={order} />;
			})}
		</div>
	);
};

export default OrdersContentContainer;
