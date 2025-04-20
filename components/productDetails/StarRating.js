import StarIcon from "@/public/icons/star.svg";
import EmptyStar from "@/public/icons/emptyStar.svg";
import HalfStarIcon from "@/public/icons/halfStar.svg";

const RatingStars = ({ editable, rating = 4.5, showRating = false }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.25 && rating - fullStars < 0.75;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	const stars = [
		...Array(fullStars).fill("full"),
		...(hasHalfStar ? ["half"] : []),
		...Array(emptyStars).fill("empty"),
	];

	return (
		<div className='flex items-center gap-[13px] p-0'>
			<div className='flex items-center gap-[5.31px] p-0'>
				{stars.map((type, index) => {
					if (type === "full") return <StarIcon key={index} />;
					if (type === "half") return <HalfStarIcon key={index} />;
					return <EmptyStar key={index} />;
				})}
			</div>

			{editable ? (
				<a
					href='#rating'
					className='text-sm font-normal text-[#B26BCA] underline'>
					{rating}/5
				</a>
			) : (
				showRating && (
					<span className='text-sm font-normal text-[#030712]'>{rating}/5</span>
				)
			)}
		</div>
	);
};

export default RatingStars;
