"use client";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

import Headline from "@/app/_shared/ui/Headline";

import { cn } from "@/lib/utils";

const RecommendationsAndTips = ({
	className,
	title,
	description,
	children,
}) => {
	const t = useTranslations("app");

	return (
		<div
			className={cn(
				"space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-md",
				className
			)}>
			<Headline
				titleClassName='text-2xl font-semibold text-gray-950'
				title={t(title)}
			/>
			<AnimatePresence mode='wait'>
				<motion.div
					key='description'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.3 }}>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default RecommendationsAndTips;
