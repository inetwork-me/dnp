// image and icons
import ProductImg1 from '@/public/images/bestSellingProducts/image1.png';
import ProductImg2 from '@/public/images/bestSellingProducts/image2.png';
import ProductImg3 from '@/public/images/bestSellingProducts/image3.png';

import BundleImage1 from '@/public/images/TopSellingBundles/Image1.png';
import BundleImage2 from '@/public/images/TopSellingBundles/image2.png';
import BundleImage3 from '@/public/images/TopSellingBundles/image3.png';

import Brand1 from '@/public/images/Brands/brand1.png';
import Brand2 from '@/public/images/Brands/brand2.png';
import Brand3 from '@/public/images/Brands/brand3.png';
import Brand4 from '@/public/images/Brands/brand4.png';
import Brand5 from '@/public/images/Brands/brand5.png';
import Brand6 from '@/public/images/Brands/brand6.png';
import Brand7 from '@/public/images/Brands/brand7.png';
import Brand8 from '@/public/images/Brands/brand8.png';

// nav social icons
import FacebookIcon from '@/public/icons/Facebook.svg';
import InstagramIcon from '@/public/icons/Instagram.svg';
import TikTokIcon from '@/public/icons/Tiktok.svg';

// footer social icons
import FacebookWhiteIcon from '@/public/icons/facebook-white.svg';
import InstagramWhiteIcon from '@/public/icons/insta-white.svg';
import TikTokWhiteIcon from '@/public/icons/tikto-white.svg';

// products images
import MainImg from '@/public/images/products/main-image.png';
import ProdSlide1 from '@/public/images/products/slide1.png';
import ProdSlide2 from '@/public/images/products/slide2.png';
import ProdSlide3 from '@/public/images/products/slide3.png';

// according icon
import InfoIcon from '@/public/icons/info.svg';
import Specification from '@/public/icons/specification.svg';
import HowToUse from '@/public/icons/how-to-use.svg';
import Caution from '@/public/icons/caution.svg';
import ShippingAndDelivery from '@/public/icons/Shipping&Delivery.svg';
import ReturnPolicy from '@/public/icons/Returns-Policy.svg';

// comments images
import Avatar1 from '@/public/images/Avatar1.png';
import Avatar2 from '@/public/images/Avatar2.png';
import Avatar3 from '@/public/images/Avatar3.png';

// doctors images
import Doctor1 from '@/public/images/doctors/img-1.png';
import Doctor2 from '@/public/images/doctors/img-2.png';
import Doctor3 from '@/public/images/doctors/img-3.png';
import Doctor4 from '@/public/images/doctors/img-4.png';
import Doctor5 from '@/public/images/doctors/img-5.png';
import Doctor6 from '@/public/images/doctors/img-6.png';
import Doctor7 from '@/public/images/doctors/img-7.png';
import Doctor8 from '@/public/images/doctors/img-8.png';

// /topics image
import Topic1 from '@/public/images/academy/img-1.jpg';
import Topic2 from '@/public/images/academy/img-2.jpg';
import Topic3 from '@/public/images/academy/img-3.jpg';
import Topic4 from '@/public/images/academy/img-4.png';
import Topic5 from '@/public/images/academy/img-5.jpg';
import Topic6 from '@/public/images/academy/img-6.jpg';

// courses images
import Course1 from '@/public/images/academy/course-1.jpg';
import Course2 from '@/public/images/academy/course-2.png';
import Course3 from '@/public/images/academy/course-3.png';
import Course4 from '@/public/images/academy/course-4.png';

// bmi calculator images
import Icon1 from '@/public/icons/bmiProfileSummary/icon1.svg';
import Icon2 from '@/public/icons/bmiProfileSummary/icon2.svg';
import Icon3 from '@/public/icons/bmiProfileSummary/icon3.svg';
import Icon4 from '@/public/icons/bmiProfileSummary/icon4.svg';
import Icon5 from '@/public/icons/bmiProfileSummary/icon5.svg';
import Icon6 from '@/public/icons/bmiProfileSummary/icon6.svg';

//  navigation items
export const navItems = [
	{ name: 'navigation.home', path: '/' },
	{ name: 'navigation.offersAndDiscounts', path: '/offersAndDiscounts' },
	{ name: 'navigation.bundles', path: '/bundles' },

	{
		name: 'navigation.doctors',
		subPages: [
			{ name: 'navigation.allDoctors', path: '/doctors/' },
			{
				name: 'navigation.academy',
				path: '/doctors/academy/',
			},
		],
	},

	{ name: 'navigation.bmiCalculator', path: '/bmiCalculator' },
	{
		name: 'navigation.packages',
		subPages: [
			{ name: 'navigation.packagesList', path: '/packages' },
			{
				name: 'navigation.onLineConsultation',
				path: '/onLineConsultation',
			},
			{ name: 'navigation.slimmingSessions', path: '/slimmingSessions' },
		],
	},
	{ name: 'navigation.recipes', path: '/recipes' },
	{ name: 'navigation.blogs', path: '/blogs' },
	{ name: 'navigation.devices', path: '/devices' },
];

// products list
export const productsList = [
	{
		id: 1,
		title: 'Product name',
		href: '/products',
		image: ProductImg1,
	},
	{
		id: 2,
		title: 'Product name',
		href: '/products',
		image: ProductImg2,
	},
	{
		id: 3,
		title: 'Product name',
		href: '/products',
		image: ProductImg2,
	},
	{
		id: 4,
		title: 'Product name',
		href: '/products',
		image: ProductImg3,
	},
];

// bundles list
export const bundleList = [
	{
		id: 1,
		title: 'Sale on protein products with 35% off',

		image: BundleImage1,
	},
	{
		id: 2,
		title: 'Acquire the protein bundle now',

		image: BundleImage2,
	},
	{
		id: 3,
		title: 'Sale on protein products with 35% off',

		image: BundleImage3,
	},
];

export const brandsList = [
	{
		id: 1,
		brandName: 'Brand name',
		image: Brand1,
	},
	{
		id: 2,
		brandName: 'Brand name',
		image: Brand2,
	},
	{
		id: 3,
		brandName: 'Brand name',
		image: Brand3,
	},
	{
		id: 4,
		brandName: 'Brand name',
		image: Brand4,
	},
	{
		id: 5,
		brandName: 'Brand name',
		image: Brand5,
	},
	{
		id: 6,
		brandName: 'Brand name',
		image: Brand6,
	},
	{
		id: 7,
		brandName: 'Brand name',
		image: Brand7,
	},
	{
		id: 8,
		brandName: 'Brand name',
		image: Brand8,
	},
];

// nav social links
export const navSocialLinks = [
	{
		id: 1,
		href: '/',
		icon: <FacebookIcon />,
	},
	{
		id: 2,
		href: '/',
		icon: <InstagramIcon />,
	},
	{
		id: 3,
		href: '/',
		icon: <TikTokIcon />,
	},
];

export const footerLinks = [
	{
		id: 1,
		headLine: 'My Account',
		links: [
			{
				id: 1,
				href: '/dashboard',
				title: 'Dashboard',
			},
			{
				id: 2,
				href: '/my-orders',
				title: 'My orders',
			},
			{
				id: 3,
				href: '/my-reviews',
				title: 'My reviews',
			},
			{
				id: 4,
				href: '/cart',
				title: 'Your cart',
			},
			{
				id: 5,
				href: '/wishlist',
				title: 'Wishlist',
			},
		],
	},
	{
		id: 2,
		headLine: 'ordersAndShipping',
		links: [
			{
				id: 1,
				href: '/faq',
				title: 'FAQ',
			},
			{
				id: 2,
				href: '/exchangeAndRefund',
				title: 'ExchangeAndRefundPolicy',
			},
			{
				id: 3,
				href: '/termsOfUse',
				title: 'TermsOfUse',
			},
			{
				id: 4,
				href: '/privacyPolicy',
				title: 'PrivacyAndPolicy',
			},
		],
	},
	{
		id: 3,
		headLine: 'Website',
		links: [
			{
				id: 1,
				href: '/',
				title: 'navigation.home',
			},
			{
				id: 2,
				href: 'bmiCalculator/',
				title: 'navigation.bmiCalculator',
			},
			{
				id: 3,
				href: 'doctors/',
				title: 'navigation.doctors',
			},
			{
				id: 4,
				href: 'devices/',
				title: 'navigation.devices',
			},
		],
	},
	{
		id: 4,
		headLine: 'Categories',
		links: [
			{
				id: 1,
				href: '/products',
				title: 'Products',
			},
			{
				id: 2,
				href: '/bundles',
				title: 'bundles',
			},
			{
				id: 3,
				href: '/products',
				title: 'bestSellers',
			},
			{
				id: 4,
				href: '/products',
				title: 'newArrivals',
			},
			{
				id: 5,
				href: '/products',
				title: 'Sale',
			},
		],
	},
	{
		id: 5,
		headLine: 'contactsUs',
		links: [
			{
				id: 1,
				href: '/+20 111 2222 444',
				title: '+20 111 2222 444',
			},
			{
				id: 2,
				href: '/+20 111 2222 444',
				title: '+20 111 2222 444',
			},
			{
				id: 3,
				href: '/+20 111 2222 444',
				title: '+20 111 2222 444',
			},
		],
	},
];

export const footerSocialLinks = [
	{
		id: 1,
		href: '/',
		icon: <FacebookWhiteIcon />,
	},
	{
		id: 2,
		href: '/',
		icon: <InstagramWhiteIcon />,
	},
	{
		id: 3,
		href: '/',
		icon: <TikTokWhiteIcon />,
	},
];

export const productImages = [
	{
		id: 1,
		image: MainImg,
	},
	{
		id: 2,
		image: ProdSlide1,
	},
	{
		id: 3,
		image: ProdSlide2,
	},
	{
		id: 4,
		image: ProdSlide2,
	},
	{
		id: 5,
		image: ProductImg3,
	},
];

export const productAccordingList = [
	{
		id: 1,
		question: 'Description',
		answer:
			'Experience 100% natural, intensive hydration that soothes dry lips effortlessly',
		icon: <InfoIcon />,
	},
	{
		id: 2,
		question: 'Specifications',
		answer:
			'Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii (Shea Butter), Theobroma Cacao (Cocoa) Seed Butter, Cera Alba (Beeswax), Olea Europaea (Olive) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Tocopherol (Vitamin E), Strawberry Extract.',
		icon: <Specification />,
	},
	{
		id: 3,
		question: 'How to use',
		answer: 'Take 1 capsule daily with a meal.',
		icon: <HowToUse />,
	},
	{
		id: 4,
		question: 'Caution',
		answer:
			'For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool dry place.',
		icon: <Caution />,
	},
	{
		id: 5,
		question: 'Shipping & Delivery',
		answer: `Orders are shipped within 2-3 business days and may take up to 7 working days to reach you.`,
		icon: <ShippingAndDelivery />,
	},
	{
		id: 6,
		question: 'Returns Policy',
		answer:
			'For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool dry place.',
		icon: <ReturnPolicy />,
	},
];

export const commentsList = [
	{
		id: 1,
		date: '2023-05-20',
		ratingCount: 4,
		comment:
			'I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!',
		user: {
			name: 'Nadia S',
			image: Avatar1,
		},
	},
	{
		id: 2,
		date: '2024-04-20',
		ratingCount: 4,
		comment:
			'Finally found products that don’t irritate my sensitive skin. The routine builder helped me pick exactly what I needed!',
		user: {
			name: 'Amira K.',
			image: Avatar2,
		},
	},
	{
		id: 3,
		date: '2025-01-01',
		ratingCount: 4,
		comment:
			'Great variety of high-quality products. My skincare routine has never been this easy and effective, i love it',
		user: {
			name: 'Sara M.',
			image: Avatar3,
		},
	},
	{
		id: 5,
		date: '2022-03-10',
		ratingCount: 4,
		comment:
			'I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!',
		user: {
			name: 'Nadia S',
			image: Avatar1,
		},
	},
	{
		id: 99,
		date: '2022-10-19',
		ratingCount: 4,
		comment:
			'I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!',
		user: {
			name: 'Nadia S',
			image: Avatar3,
		},
	},
];

export const ordersList = [
	{
		id: 1,
		orderNumber: '#1254567',
		datePlaced: '2023-05-20',
		totalCost: 1932,

		shipping: {
			status: 'inProgress',
			date: '2023-05-20',
		},

		products: [
			{
				id: 1,
				image: ProductImg1,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
			{
				id: 2,
				image: ProductImg2,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
		],
	},
	{
		id: 2,
		orderNumber: '#1254567',
		datePlaced: '2023-05-20',
		totalCost: 1932,

		shipping: {
			status: 'delivered',
			date: '202-05-20',
		},

		products: [
			{
				id: 1,
				image: ProductImg1,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
			{
				id: 2,
				image: ProductImg2,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
		],
	},
	{
		id: 3,
		orderNumber: '#1254567',
		datePlaced: '2023-05-20',
		totalCost: 1932,

		shipping: {
			status: 'delivered',
			date: '2025-05-20',
		},

		products: [
			{
				id: 1,
				image: ProductImg1,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
			{
				id: 2,
				image: ProductImg2,
				vendor: 'Vendor Name',
				title: 'Product name',
				quantity: 2,
				price: 817,
			},
		],
	},
];

//
export const categoriesFilterList = [
	{
		id: 1,
		title: 'category',
		subCategories: [
			{ id: 1, title: 'Category 1' },
			{ id: 2, title: 'Category 2' },
			{ id: 3, title: 'Category 3' },
			{ id: 4, title: 'Category 4' },
			{ id: 5, title: 'Category 5' },
		],
	},
	{
		id: 2,
		title: 'category',
		subCategories: [
			{ id: 1, title: 'Category 1' },
			{ id: 2, title: 'Category 2' },
			{ id: 3, title: 'Category 3' },
			{ id: 4, title: 'Category 4' },
			{ id: 5, title: 'Category 5' },
		],
	},
	{
		id: 3,
		title: 'category',
		subCategories: [
			{ id: 1, title: 'Category 1' },
			{ id: 2, title: 'Category 2' },
			{ id: 3, title: 'Category 3' },
			{ id: 4, title: 'Category 4' },
			{ id: 5, title: 'Category 5' },
		],
	},
	{
		id: 4,
		title: 'category',
		subCategories: [
			{ id: 1, title: 'Category 1' },
			{ id: 2, title: 'Category 2' },
			{ id: 3, title: 'Category 3' },
			{ id: 4, title: 'Category 4' },
			{ id: 5, title: 'Category 5' },
		],
	},
	{
		id: 5,
		title: 'price',
	},
];

export const doctorsDataList = [
	{
		id: 1,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor1,
	},
	{
		id: 2,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor2,
	},
	{
		id: 3,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor3,
	},
	{
		id: 4,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor4,
	},
	{
		id: 5,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor5,
	},
	{
		id: 6,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor6,
	},
	{
		id: 7,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor7,
	},
	{
		id: 8,
		name: 'Dr. Sarah Johnson',
		job_title:
			'Description and Details about doctor career and Success and achievements Description and Details about doctor career and Success and achievements',
		image: Doctor8,
	},
];

export const bookAppointmentTabs = [
	{
		id: 1,
		tab: 'Choose doctor',
	},
	{
		id: 2,
		tab: 'Personal data',
	},
	{
		id: 3,
		tab: 'Pick a Date',
	},
	{
		id: 4,
		tab: 'Payment',
	},
];

export const topics = [
	{
		id: 1,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic1,
		category: 'Course',
	},
	{
		id: 2,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic2,
		category: 'Article',
	},
	{
		id: 3,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic3,
		category: 'Article',
	},
	{
		id: 4,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic4,
		category: 'Course',
	},
	{
		id: 5,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic5,
		category: 'Article',
	},
	{
		id: 6,
		title: 'Content Title',
		description: 'Description about the content the academy provide',
		image: Topic6,
		category: 'Course',
	},
];

export const coursesList = [
	{
		id: 1,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course1,
	},
	{
		id: 2,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course2,
	},
	{
		id: 3,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course3,
	},
	{
		id: 4,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course4,
	},
	{
		id: 5,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course1,
	},
	{
		id: 6,
		title: 'Course Title',
		description: 'Description about the course',
		image: Course1,
	},
];

export const bmiProfileInfo = [
	{
		id: 1,
		title: 'BMI Level',
		description: 'Body Mass Index is a measure',
		icon: <Icon1 />,
		bmiValue: '45',
		result: 'Normal',
	},
	{
		id: 2,
		title: 'Body Type',
		description: 'Determine the degree',
		icon: <Icon2 />,
		bmiValue: '',
		result: '',
	},
	{
		id: 3,
		title: 'BMR',
		description: 'Basal Metabolic Rate',
		icon: <Icon3 />,
		bmiValue: '1609',
		result: 'Normal',
	},
	{
		id: 4,
		title: 'Water',
		description: 'Daily water intake',
		icon: <Icon4 />,
		bmiValue: '2.5 Ltr',
		result: 'Drink water daily.',
	},
	{
		id: 5,
		title: 'TEE',
		description:
			'Total Energy expenditure refers to the amount of energy an individual uses to maintain essential body functions',
		icon: <Icon5 />,
		bmiValue: '2212',
		result: 'Total Energy Expenditure',
	},
	{
		id: 6,
		title: 'Calories',
		description:
			'Calorie: Average Daily Calories Needed to Lose Weight Or Gain Weight',
		icon: <Icon6 />,
		bmiValue: '2212',
		result: 'Normal',
	},
];
