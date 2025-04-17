import React from "react";

const FlavourSelector = ({ flavours, selectedFlavour, onSelect, t }) => {
	return (
		<div className='flex flex-col items-start gap-4 border-b pb-4 border-b-gray-200'>
			<h4 className='text-lg font-semibold'>{t("Flavours")}</h4>
			<div className='flex flex-wrap gap-3'>
				{flavours.map((flavour) => (
					<button
						key={flavour}
						className={`w-[186px] h-[51px] text-[16px] font-medium leading-7 px-4 py-3 rounded-full border cursor-pointer transition-colors delay-100 hover:text-[#B26BCA] hover:border-[#B26BCA] ${
							selectedFlavour === flavour
								? "border-[#B26BCA] text-[#B26BCA] "
								: "border-gray-300 text-gray-600 box-border"
						}`}
						onClick={() => onSelect(flavour)}>
						{flavour}
					</button>
				))}
			</div>
		</div>
	);
};

export default FlavourSelector;
