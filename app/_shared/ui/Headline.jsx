import { cn } from "@/lib/utils";

const Headline = ({
	titleClassName = "text-[40px] leading-[51px] font-semibold text-gray-950 ",
	descriptionClassName,
	className = "items-start",
	title,
	description,
	children,
}) => {
	return (
		<div className={cn("space-y-4 text-start", className)}>
			{children ? (
				<div className='flex items-center flex-wrap gap-4'>
					<h2 className={titleClassName}>{title}</h2>
					{children}
				</div>
			) : (
				<h2 className={titleClassName}>{title}</h2>
			)}

			{description && (
				<p
					className={cn(
						"text-lg font-normal leading-7 text-gray-700",
						descriptionClassName
					)}>
					{description}
				</p>
			)}
		</div>
	);
};

export default Headline;
