import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const Badge = ({ badge, className }) => {
	const t = useTranslations("app");
	return (
		<div
			className={cn(
				className,
				"flex items-center py-1 px-2.5 rounded-full text-sm font-medium"
			)}>
			{t(badge)}
		</div>
	);
};

export default Badge;
