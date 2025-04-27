import OrdersContentContainer from "./ordersContainer/OrdersContentContainer";
import TrackYourOrderForm from "./TrackYourOrderForm";

const Orders = () => {
	return (
		<section className='w-full flex flex-col items-start justify-start gap-8 p-0'>
			<TrackYourOrderForm />

			<OrdersContentContainer />
		</section>
	);
};

export default Orders;
