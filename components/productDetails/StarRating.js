import StarIcon from "@/public/icons/star.svg";
import HalfStarIcon from "@/public/icons/halfStar.svg";

const RatingStars = ({ editable, rating = 4.5 }) => {
	return (
		<div className='flex items-center gap-[13px] p-0'>
			<div className='flex items-center gap-[5.31px] p-0'>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<HalfStarIcon />
			</div>

			{editable ? (
				<a href='/' className='text-sm font-normal text-[#B26BCA] underline'>
					{rating}/5
				</a>
			) : (
				<span className='text-sm font-normal text-[#030712]'>{rating}/5</span>
			)}
		</div>
	);
};

export default RatingStars;
