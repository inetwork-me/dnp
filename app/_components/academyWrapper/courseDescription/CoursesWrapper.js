import CourseCard from "./CourseCard";

// fake data
import { coursesList } from "@/fakeData/data";

const CoursesWrapper = () => {
	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8'>
			{coursesList.map((item) => (
				<CourseCard key={item.id} item={item} />
			))}
		</div>
	);
};

export default CoursesWrapper;
