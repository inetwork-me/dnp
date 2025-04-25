import Image from "next/image";
import Link from "next/link";

// image
import FooterLogo from "@/public/images/footer-logo.png";

const BrandLogo = () => {
	return (
		<Link href='/' className='w-[95px] h-10 flex items-start gap-2 p'>
			<Image className='w-full h-full' src={FooterLogo} alt='footer logo' />
		</Link>
	);
};

export default BrandLogo;
