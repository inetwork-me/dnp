// image and icons
import ShopByBrands from "@/components/ShopByBrands.js/ShopByBrands";
import ProductImg1 from "@/public/images/bestSellingProducts/image1.png";
import ProductImg2 from "@/public/images/bestSellingProducts/image2.png";
import ProductImg3 from "@/public/images/bestSellingProducts/image3.png";

import BundleImage1 from "@/public/images/TopSellingBundles/image1.png";
import BundleImage2 from "@/public/images/TopSellingBundles/image2.png";
import BundleImage3 from "@/public/images/TopSellingBundles/image3.png";

import Brand1 from "@/public/images/Brands/brand1.png";
import Brand2 from "@/public/images/Brands/brand2.png";
import Brand3 from "@/public/images/Brands/brand3.png";
import Brand4 from "@/public/images/Brands/brand4.png";
import Brand5 from "@/public/images/Brands/brand5.png";
import Brand6 from "@/public/images/Brands/brand6.png";
import Brand7 from "@/public/images/Brands/brand7.png";
import Brand8 from "@/public/images/Brands/brand8.png";

// nav social icons
import FacebookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/Instagram.svg";
import TikTokIcon from "@/public/icons/TikTok.svg";

// footer social icons
import FacebookWhiteIcon from "@/public/icons/facebook-white.svg";
import InstagramWhiteIcon from "@/public/icons/Insta-white.svg";
import TikTokWhiteIcon from "@/public/icons/tikto-white.svg";

// products images
import MainImg from "@/public/images/products/main-image.png";
import ProdSlide1 from "@/public/images/products/slide1.png";
import ProdSlide2 from "@/public/images/products/slide2.png";
import ProdSlide3 from "@/public/images/products/slide3.png";

// according icon
import InfoIcon from "@/public/icons/info.svg";
import Specification from "@/public/icons/specification.svg";
import HowToUse from "@/public/icons/how-to-use.svg";
import Caution from "@/public/icons/caution.svg";
import ShippingAndDelivery from "@/public/icons/Shipping&Delivery.svg";
import ReturnPolicy from "@/public/icons/Returns-Policy.svg";

// comments images
import Avatar1 from "@/public/images/Avatar1.png";
import Avatar2 from "@/public/images/Avatar2.png";
import Avatar3 from "@/public/images/Avatar3.png";

//  navigation items
export const navItems = [
	{ name: "navigation.home", path: "/" },
	{ name: "navigation.offersAndDiscounts", path: "/offersAndDiscounts" },
	{ name: "navigation.doctors", path: "/doctors" },
	{ name: "navigation.bmiCalculator", path: "/bmiCalculator" },
	{
		name: "navigation.packages",
		subPages: [
			{ name: "navigation.packagesList", path: "/packages" },
			{
				name: "navigation.onLineConsultation",
				path: "/onLineConsultation",
			},
			{ name: "navigation.slimmingSessions", path: "/slimmingSessions" },
		],
		path: "/packages",
	},
	{ name: "navigation.recipes", path: "/recipes" },
	{ name: "navigation.blogs", path: "/blogs" },
	{ name: "navigation.devices", path: "/devices" },
];

// products list
export const productsList = [
	{
		id: 1,
		title: "Product name",
		href: "/products",
		image: ProductImg1,
	},
	{
		id: 2,
		title: "Product name",
		href: "/products",
		image: ProductImg2,
	},
	{
		id: 3,
		title: "Product name",
		href: "/products",
		image: ProductImg2,
	},
	{
		id: 4,
		title: "Product name",
		href: "/products",
		image: ProductImg3,
	},
];

// bundles list
export const bundleList = [
	{
		id: 1,
		title: "Sale on protein products with 35% off",

		image: BundleImage1,
	},
	{
		id: 2,
		title: "Acquire the protein bundle now",

		image: BundleImage2,
	},
	{
		id: 3,
		title: "Sale on protein products with 35% off",

		image: BundleImage3,
	},
];

export const brandsList = [
	{
		id: 1,
		brandName: "Brand name",
		image: Brand1,
	},
	{
		id: 2,
		brandName: "Brand name",
		image: Brand2,
	},
	{
		id: 3,
		brandName: "Brand name",
		image: Brand3,
	},
	{
		id: 4,
		brandName: "Brand name",
		image: Brand4,
	},
	{
		id: 5,
		brandName: "Brand name",
		image: Brand5,
	},
	{
		id: 6,
		brandName: "Brand name",
		image: Brand6,
	},
	{
		id: 7,
		brandName: "Brand name",
		image: Brand7,
	},
	{
		id: 8,
		brandName: "Brand name",
		image: Brand8,
	},
];

// nav social links
export const navSocialLinks = [
	{
		id: 1,
		href: "/",
		icon: <FacebookIcon />,
	},
	{
		id: 2,
		href: "/",
		icon: <InstagramIcon />,
	},
	{
		id: 3,
		href: "/",
		icon: <TikTokIcon />,
	},
];

export const footerLinks = [
	{
		id: 1,
		headLine: "myAccount",
		links: [
			{
				id: 1,
				href: "/dashboard",
				title: "Dashboard",
			},
			{
				id: 2,
				href: "/my-orders",
				title: "My orders",
			},
			{
				id: 3,
				href: "/my-reviews",
				title: "My reviews",
			},
			{
				id: 4,
				href: "/cart",
				title: "Your cart",
			},
			{
				id: 5,
				href: "/wishlist",
				title: "Wishlist",
			},
		],
	},
	{
		id: 2,
		headLine: "ordersAndShipping",
		links: [
			{
				id: 1,
				href: "/faq",
				title: "FAQ",
			},
			{
				id: 2,
				href: "/exchangeAndRefund",
				title: "ExchangeAndRefundPolicy",
			},
			{
				id: 3,
				href: "/termsOfUse",
				title: "TermsOfUse",
			},
			{
				id: 4,
				href: "/privacyPolicy",
				title: "PrivacyAndPolicy",
			},
		],
	},
	{
		id: 3,
		headLine: "Website",
		links: [
			{
				id: 1,
				href: "/",
				title: "navigation.home",
			},
			{
				id: 2,
				href: "/bmiCalculator",
				title: "navigation.bmiCalculator",
			},
			{
				id: 3,
				href: "/doctors",
				title: "navigation.doctors",
			},
			{
				id: 4,
				href: "/devices",
				title: "navigation.devices",
			},
		],
	},
	{
		id: 4,
		headLine: "Categories",
		links: [
			{
				id: 1,
				href: "/products",
				title: "Products",
			},
			{
				id: 2,
				href: "/bundles",
				title: "bundles",
			},
			{
				id: 3,
				href: "/products",
				title: "bestSellers",
			},
			{
				id: 4,
				href: "/products",
				title: "newArrivals",
			},
			{
				id: 5,
				href: "/products",
				title: "Sale",
			},
		],
	},
	{
		id: 5,
		headLine: "contactsUs",
		links: [
			{
				id: 1,
				href: "/+20 111 2222 444",
				title: "+20 111 2222 444",
			},
			{
				id: 2,
				href: "/+20 111 2222 444",
				title: "+20 111 2222 444",
			},
			{
				id: 3,
				href: "/+20 111 2222 444",
				title: "+20 111 2222 444",
			},
		],
	},
];

export const footerSocialLinks = [
	{
		id: 1,
		href: "/",
		icon: <FacebookWhiteIcon />,
	},
	{
		id: 2,
		href: "/",
		icon: <InstagramWhiteIcon />,
	},
	{
		id: 3,
		href: "/",
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
		question: "Description",
		answer:
			"Experience 100% natural, intensive hydration that soothes dry lips effortlessly",
		icon: <InfoIcon />,
	},
	{
		id: 2,
		question: "Specifications",
		answer:
			"Cocos Nucifera (Coconut) Oil, Butyrospermum Parkii (Shea Butter), Theobroma Cacao (Cocoa) Seed Butter, Cera Alba (Beeswax), Olea Europaea (Olive) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Tocopherol (Vitamin E), Strawberry Extract.",
		icon: <Specification />,
	},
	{
		id: 3,
		question: "How to use",
		answer: "Take 1 capsule daily with a meal.",
		icon: <HowToUse />,
	},
	{
		id: 4,
		question: "Caution",
		answer:
			"For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool dry place.",
		icon: <Caution />,
	},
	{
		id: 5,
		question: "Shipping & Delivery",
		answer: `Orders are shipped within 2-3 business days and may take up to 7 working days to reach you.`,
		icon: <ShippingAndDelivery />,
	},
	{
		id: 6,
		question: "Returns Policy",
		answer:
			"For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool dry place.",
		icon: <ReturnPolicy />,
	},
];

export const commentsList = [
	{
		id: 1,
		date: "2023-05-20",
		ratingCount: 4,
		comment:
			"I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!",
		user: {
			name: "Nadia S",
			image: Avatar1,
		},
	},
	{
		id: 2,
		date: "2024-04-20",
		ratingCount: 4,
		comment:
			"Finally found products that don’t irritate my sensitive skin. The routine builder helped me pick exactly what I needed!",
		user: {
			name: "Amira K.",
			image: Avatar2,
		},
	},
	{
		id: 3,
		date: "2025-01-01",
		ratingCount: 4,
		comment:
			"Great variety of high-quality products. My skincare routine has never been this easy and effective, i love it",
		user: {
			name: "Sara M.",
			image: Avatar3,
		},
	},
	{
		id: 5,
		date: "2022-03-10",
		ratingCount: 4,
		comment:
			"I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!",
		user: {
			name: "Nadia S",
			image: Avatar1,
		},
	},
	{
		id: 99,
		date: "2022-10-19",
		ratingCount: 4,
		comment:
			"I’ve struggled with dry skin for years, but after using the recommended products, my skin feels hydrated and smooth. Love it!",
		user: {
			name: "Nadia S",
			image: Avatar3,
		},
	},
];
