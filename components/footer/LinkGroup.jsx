import Link from "next/link";

const LinkGroup = ({ headLine, links, t }) => {
	return (
		<li className=' flex flex-col items-start gap-2 mx-auto p-0 '>
			<h3 className='text-lg font-medium text-[#FFFFFF] '>{headLine}</h3>

			<ul className='flex flex-col items-start gap-2 p-0'>
				{links.map(({ id, title, href }) => {
					return (
						<li key={id}>
							{headLine === "Contacts Us" ? (
								<a
									href={`tel:${href}`}
									className='text-[16px] font-normal  text-[#FFFFFF] transition-all duration-200 hover:text-[#ffffffcc]'>
									{title}
								</a>
							) : (
								<Link
									href={href}
									className='text-[16px] font-normal  text-[#FFFFFF] transition-all duration-200 hover:text-[#ffffffcc]'>
									{t(title)}
								</Link>
							)}
						</li>
					);
				})}

				<li></li>
			</ul>
		</li>
	);
};

export default LinkGroup;
