import ContactInformation from "./contactInformation/ContactInformation";
import ShippingInformation from "./shippingInformation/ShippingInformation";
import PaymentInformation from "./paymentInformation/PaymentInformation";

const ContentBox = () => {
	return (
		<div className='w-full flex flex-col items-start gap-4 p-8'>
			<ContactInformation />

			<div className='w-full my-3 h-[1px] bg-gray-200' />
			<ShippingInformation />

			<div className='w-full my-3 h-[1px] bg-gray-200' />
			<PaymentInformation />
		</div>
	);
};

export default ContentBox;
