import Link from "next/link";

const NavLink = ({ navigate, children }) => {
	return (
		<Link
			href={navigate}
			className='flex items-center gap-2 pr-2 rtl:pr-0 rtl:pl-2  rtl:border-l rtl:border-0 border-r border-gray-200'>
			{children}
		</Link>
	);
};

export default NavLink;
