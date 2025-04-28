import Currency from "@/app/_components/Currency";
import { formatDate } from "@/app/_utils/formatDate";
import React from "react";

const OrdersHeader = ({ t, order }) => {
	return (
		<div className='w-full flex items-start gap-6 '>
			<div className='w-full flex items-start  justify-between'>
				<div className='flex-1 flex items-center gap-8'>
					<div className='flex flex-col items-start gap-1 border-r border-gray-200 pr-8'>
						<h6 className='text-lg font-medium text-gray-900'>
							{t("orders.orderNumber")}
						</h6>
						<p className='text-[16px] font-normal leading-7 text-gray-500'>
							#1254567
						</p>
					</div>

					<div className='flex flex-col items-start gap-1'>
						<h6 className='text-lg font-medium text-gray-900'>
							{t("orders.datePlaced")}
						</h6>
						<p className='text-[16px] font-normal leading-7 text-gray-500'>
							{formatDate(order.datePlaced)}
						</p>
					</div>
				</div>

				<div className='flex flex-col justify-center items-end self-stretch gap-1'>
					<div className='flex flex-col items-start gap-1'>
						<h6 className='text-lg font-bold text-gray-900'>
							{t("orders.totalCost")}
						</h6>
						<Currency amount={order.price} currency={order.currency || "EGP"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrdersHeader;
