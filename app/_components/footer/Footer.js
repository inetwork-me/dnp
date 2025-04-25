import FooterBottomContainer from "./FooterBottomContainer";
import FooterLinksContainer from "./FooterLinksContainer";

const Footer = () => {
	return (
		<footer
			className='py-20 '
			style={{
				background:
					"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #B26BCA",
			}}>
			<div className='container mx-auto'>
				<div className='flex flex-col items-start gap-14 md:items-center md:justify-between'>
					<FooterLinksContainer />
					<FooterBottomContainer />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
