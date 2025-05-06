import { useTranslations } from 'next-intl';

// components
import BreadCrumb from '@/app/_shared/ui/Breadcrumb';
import PackagesWrapper from '@/app/_components/packages/PackagesWrapper';

export default function page() {
	const t = useTranslations('app');

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t('navigation.slimmingSessions')} />

			<PackagesWrapper headline={'navigation.slimmingSessions'} />
		</section>
	);
}
