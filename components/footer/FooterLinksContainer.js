import React from "react";
import BrandLogo from "./BrandLogo";
import LinksWrapper from "./LinksWrapper";

const FooterLinksContainer = () => {
	return (
		<div className='w-full flex items-start justify-between gap-8 p-0'>
			<BrandLogo />
			<LinksWrapper />
		</div>
	);
};

export default FooterLinksContainer;
