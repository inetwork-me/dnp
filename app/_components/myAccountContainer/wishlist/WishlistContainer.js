import { productsList } from "@/fakeData/data";

import WishlIstItem from "./WishlIstItem";

const WishlistContainer = ({ t }) => {
	return (
		<div className='w-full flex  flex-col items-start self-stretch'>
			<div className='w-full flex flex-col items-start gap-6'>
				{productsList.map((item) => (
					<WishlIstItem key={item.id} product={item} t={t} />
				))}
			</div>
		</div>
	);
};

export default WishlistContainer;
