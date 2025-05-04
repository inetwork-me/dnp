import React from "react";
import Image from "next/image";
import ProductImages from "./ProductImages";
import ProductsText from "./ProductsText";
import Modal from "../../_shared/ui/Modal";
import CaloriesGuide from "@/public/images/Guide.png";

const ProductDetails = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return (
		<div className='w-full container mx-auto flex justify-center items-start gap-8 pt-6 pb-12'>
			<ProductImages />
			<ProductsText openModal={() => setIsModalOpen(true)} />

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='Calories Guide'>
				<Image
					priority
					src={CaloriesGuide}
					alt='Calories Guide'
					className='w-full'
				/>
			</Modal>
		</div>
	);
};

export default ProductDetails;
