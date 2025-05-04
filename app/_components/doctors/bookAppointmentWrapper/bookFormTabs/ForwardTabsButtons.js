import { Button } from "@/app/_shared/ui/button";

const ForwardTabsButtons = ({
	activeTab,
	setActiveTab,
	handleOpenModal,
	t,
}) => {
	const handleNextClick = () => {
		setActiveTab((prev) => prev + 1);
	};
	const handlePrevClick = () => {
		setActiveTab((prev) => prev - 1);
	};

	return (
		<div className='flex items-start gap-6  '>
			<Button
				type='button'
				className='!shadow-none'
				variant='outline'
				size='lg'
				onClick={handlePrevClick}
				disabled={activeTab === 1}>
				{t("Back")}
			</Button>

			{activeTab === 4 ? (
				<Button onClick={handleOpenModal} type='button' size='lg'>
					{t("Confirm Appointment")}
				</Button>
			) : (
				<Button type='button' size='lg' onClick={handleNextClick}>
					{t("Next")}
				</Button>
			)}
		</div>
	);
};

export default ForwardTabsButtons;
