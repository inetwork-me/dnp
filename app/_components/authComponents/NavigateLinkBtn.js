import Link from "next/link";

const NavigateLinkBtn = ({ href, text }) => {
	return (
		<Link
			className='text-[16px] text-[#B26BCA] font-medium leading-[27px] underline'
			href={href}>
			{text}
		</Link>
	);
};

export default NavigateLinkBtn;
