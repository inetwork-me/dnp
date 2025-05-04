import React, { useState } from "react";

import ChooseDoctor from "./ChooseDoctor";
import PersonalData from "./PersonalData";
import PickDate from "./PickDate";
import Payment from "./Payment";
import { useFormik } from "formik";
import { bookAppointmentSchema } from "@/app/_utils/validationSchemas";
import ForwardTabsButtons from "../../ForwardTabsButtons";
import Modal from "@/app/_shared/ui/Modal";
import BookStatusModal from "../../../BookStatusModal";
import { useRouter } from "next/navigation";

const Form = ({ activeTab, setActiveTab, t }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const router = useRouter();

	// handle open modal
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	// handle close modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
		router.replace("/");
	};

	// The formik hook
	const formik = useFormik({
		initialValues: {
			doctorName: "",
			departmentName: "",
			fullName: "",
			email: "",
			phoneNumber: "",
			pickDate: new Date(),
			cardNumber: "",
			cardHolderName: "",
			cardExpiryDate: "",
			cardCvv: "",
		},
		validationSchema: bookAppointmentSchema,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values, { setStatus }) => {
			setStatus(t("Booking successful"));
		},
	});

	return (
		<>
			<form className='flex flex-col gap-6'>
				{formik.status && (
					<p className='text-red-500 text-center mb-4'>{formik.status}</p>
				)}

				{activeTab === 1 && <ChooseDoctor formik={formik} t={t} />}
				{activeTab === 2 && <PersonalData formik={formik} t={t} />}
				{activeTab === 3 && <PickDate formik={formik} t={t} />}
				{activeTab === 4 && <Payment formik={formik} t={t} />}

				<ForwardTabsButtons
					handleOpenModal={handleOpenModal}
					setActiveTab={setActiveTab}
					activeTab={activeTab}
					t={t}
				/>
			</form>
			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				<BookStatusModal onClose={handleCloseModal} />
			</Modal>
		</>
	);
};

export default Form;
