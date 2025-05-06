import { useTranslations } from 'next-intl';

// components
import BreadCrumb from '@/app/_shared/ui/Breadcrumb';
import BookAppointmentWrapper from '@/app/_components/doctors/bookAppointmentWrapper/BookAppointmentWrapper';

export default function page() {
	const t = useTranslations('app');

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb
				parentPage={'doctors'}
				currentPage={t('Book Appointment')}
				nestedPageTitle={'Dr. Sarah Johnson'}
			/>

			<BookAppointmentWrapper />
		</section>
	);
}
