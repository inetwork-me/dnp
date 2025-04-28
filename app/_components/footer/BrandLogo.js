import Image from "next/image";
import Link from "next/link";

// image
import FooterLogo from "@/public/images/footer-logo.png";

const BrandLogo = () => {
	return (
		<Link href='/' className='col-span-1 h-10 '>
			<Image
				className='max-w-[95px] h-full'
				src={FooterLogo}
				alt='footer logo'
			/>
		</Link>
	);
};

export default BrandLogo;
