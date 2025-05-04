import Headline from "@/app/_shared/ui/Headline";
import CoursesWrapper from "./CoursesWrapper";

const CourseDescription = () => {
	return (
		<div className='container mx-auto py-12 '>
			<div className=' flex flex-col items-start gap-8'>
				<Headline
					titleClassName='text-3xl font-semibold text-gray-950 '
					title='Course Name'
					description='Description About the Course'
				/>

				<CoursesWrapper />
			</div>
		</div>
	);
};

export default CourseDescription;
