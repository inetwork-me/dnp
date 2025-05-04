import TopicCard from "./TopicCard";

import { topics } from "@/fakeData/data";

const TopicsWrapper = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
			{topics.map((topic) => (
				<TopicCard key={topic.id} topic={topic} />
			))}
		</div>
	);
};

export default TopicsWrapper;
