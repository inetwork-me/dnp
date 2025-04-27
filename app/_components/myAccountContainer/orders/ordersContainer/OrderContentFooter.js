import React from "react";
import ShippingStatus from "./shippingStatus/ShippingStatus";
import Link from "next/link";

const OrderContentFooter = ({ t, order }) => {
	return (
		<div className='w-full flex justify-between items-start'>
			<ShippingStatus t={t} shipping={order.shipping} />

			<Link
				href={`/`}
				className='w-max text-[16px] font-medium leading-7 text-[#B26BCA] cursor-pointer underline'>
				{t("orders.buyAgain")}
			</Link>
		</div>
	);
};

export default OrderContentFooter;
