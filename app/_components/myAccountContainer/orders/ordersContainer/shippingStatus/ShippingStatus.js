import { formatDate } from "@/utils/formatDate";
import { shippingStatusIcon } from "@/utils/shippingStatusIcon";

const ShippingStatus = ({ t, shipping }) => {
	return (
		<div className='flex-1 flex items-center gap-2 self-stretch'>
			{shippingStatusIcon(shipping.status)}

			<p className='text-[16px] font-normal leading-7 text-gray-500'>
				{shipping.status === "inProgress"
					? t("orders.expectedDeliveryDate")
					: shipping.status === "delivered"
					? t("orders.deliveredOn")
					: null}

				{formatDate(shipping.date)}
			</p>
		</div>
	);
};

export default ShippingStatus;
