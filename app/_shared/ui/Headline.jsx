import { cn } from "@/lib/utils";

const Headline = ({
	titleClassName = "text-[40px] leading-[51px] font-semibold text-gray-950 ",
	descriptionClassName,
	className = "items-start",
	title,
	description,
}) => {
	return (
		<div className={cn("flex flex-col gap-4  text-start pb-4", className)}>
			<h2 className={titleClassName}>{title}</h2>
			<p
				className={cn(
					"text-lg font-normal leading-7 text-gray-700",
					descriptionClassName
				)}>
				{description}
			</p>
		</div>
	);
};

export default Headline;
