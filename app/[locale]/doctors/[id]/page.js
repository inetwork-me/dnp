import { useTranslations } from 'next-intl';

// components
import BreadCrumb from '@/app/_shared/ui/Breadcrumb';
import DoctorProfile from '@/app/_components/doctors/doctorProfile/DoctorProfile';
import SendFeedBackForm from '@/app/_components/doctors/sendFeedBackForm/SendFeedBackForm';

export default function page() {
	const t = useTranslations('app');

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb
				parentPage={'doctors'}
				currentPage='Dr. Sarah Johnson'
				nestedPageTitle={t('navigation.allDoctors')}
			/>
			<DoctorProfile />

			<SendFeedBackForm />
		</section>
	);
}
