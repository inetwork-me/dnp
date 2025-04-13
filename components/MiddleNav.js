"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "@/public/icons/SearchIcon.svg";
import HeartIcon from "@/public/icons/HeartIcon.svg";
import CartIcon from "@/public/icons/CartIcon.svg";

const MiddleNav = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// Implement search functionality here
		console.log("Searching for:", searchQuery);
	};

	return (
		<div className=' h-[88px] py-4 px-4 border-y border-gray-200'>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Logo */}
				<div className='flex-shrink-0'>
					<Link href='/'>
						<div className='cursor-pointer'>
							<Image
								src='/logo.png'
								alt='DNP Logo'
								width={151}
								height={64}
								className='h-[64px] w-[151px] '
							/>
						</div>
					</Link>
				</div>

				{/* Search Bar */}
				<div className='flex-grow mx-8 max-w-[897px]'>
					<form onSubmit={handleSearchSubmit} className='relative'>
						<input
							type='text'
							placeholder='Search...'
							value={searchQuery}
							onChange={handleSearchChange}
							className='w-full h-12 py-3 px-4 bg-gray-100 pr-10 border-none rounded-xl focus:outline-none  '
						/>
						<button
							type='submit'
							className='absolute flex justify-center items-center w-8 h-8 right-3 top-1/2 transform -translate-y-1/2 bg-white  rounded-[10px] shadow-custom'>
							<SearchIcon className='w-5' />
						</button>
					</form>
				</div>

				{/* Wishlist and Cart */}
				<div className='flex items-center space-x-6'>
					<Link href='/wishlist'>
						<div className='relative flex items-center cursor-pointer group'>
							<HeartIcon size={24} className='text-gray-800' />
							<span className='absolute top-2 -right-2 bg-[#B26BCA] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
								0
							</span>
						</div>
					</Link>

					<Link href='/cart'>
						<div className='relative flex items-center cursor-pointer group'>
							<CartIcon size={24} className='text-gray-800 ' />
							<span className='absolute top-2 -right-2 bg-[#B26BCA] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
								0
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MiddleNav;
