import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

import ChartContent from "./ChartContent";
import DescriptionContent from "./DescriptionContent";

const InfoCardBody = ({ showDescription, item }) => {
	const t = useTranslations("app");
	return (
		<div className='text-center space-y-4'>
			<AnimatePresence mode='wait'>
				{showDescription ? (
					<motion.div
						key='description'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}>
						<DescriptionContent description={t(item.description)} />
					</motion.div>
				) : (
					<motion.div
						key='chart'
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}>
						<ChartContent item={item} />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default InfoCardBody;
