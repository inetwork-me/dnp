import { useTranslations } from "next-intl";

const InfoCardBody = ({ showDescription, item }) => {
	const t = useTranslations("app");
	return (
		<div className='text-center space-y-4'>
			{showDescription ? (
				<p className='text-lg font-normal text-gray-700 text-balance'>
					{t(item.description)}
				</p>
			) : (
				<>
					<div className='flex justify-center items-center'>{item.icon}</div>
					{item.result && (
						<h3 className='text-[40px] font-semibold text-[#723881]'>
							{item.bmiValue}
						</h3>
					)}
					{item.result && (
						<p className='text-base font-medium text-gray-800'>{item.result}</p>
					)}
				</>
			)}
		</div>
	);
};

export default InfoCardBody;
