'use client';

import { useTranslations } from 'next-intl';
import BreadCrumb from '@/app/_shared/ui/Breadcrumb';
import ProductDescription from '@/app/_components/productDetails/ProductDescription';
import ProductDetails from '@/app/_components/productDetails/ProductDetails';
import WriteReview from '@/app/_components/productDetails/writeReview/WriteReview';
import ProductsSection from '@/app/_components/productsSection/ProductsSection';

export default function page() {
	const t = useTranslations('app');

	return (
		<section className='bg-[#F9FAFB] '>
			<BreadCrumb currentPage={t('navigation.offersAndDiscounts')} />
			<ProductDetails />

			<ProductDescription t={t} />
			<WriteReview t={t} />

			<ProductsSection
				discount={30}
				headlineTitle={t('Recommended products')}
			/>

			<div className='border-b border-y-gray-200 ' />

			<ProductsSection discount={40} headlineTitle={t('Related products')} />
		</section>
	);
}
