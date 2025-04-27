import { commentsList } from "@/fakeData/data";
import ReviewItem from "./ReviewItem";

const ReviewsContainer = () => {
	return (
		<div className='w-full flex flex-col items-start  p-6 gap-8 '>
			{commentsList.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</div>
	);
};

export default ReviewsContainer;
