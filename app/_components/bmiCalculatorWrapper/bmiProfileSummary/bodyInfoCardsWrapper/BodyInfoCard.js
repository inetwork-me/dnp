"use client";
import { useState } from "react";

import InfoCardHeader from "./InfoCardHeader";
import InfoCardBody from "./InfoCardBody";

const BodyInfoCard = ({ item }) => {
	const [showDescription, setShowDescription] = useState(false);

	const handleShowDescription = () => {
		setShowDescription(!showDescription);
	};
	return (
		<div className='col-span-1 space-y-3  rounded-xl border border-gray-200 bg-white p-8 shadow-md'>
			<InfoCardHeader
				showDescription={showDescription}
				onClick={handleShowDescription}
				item={item}
			/>
			<InfoCardBody showDescription={showDescription} item={item} />
		</div>
	);
};

export default BodyInfoCard;
