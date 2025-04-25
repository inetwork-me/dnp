import TabNavContainer from "./TabNavContainer";

const Sidebar = ({ profileData }) => {
	return (
		<aside className='sticky top-4 w-[296px] min-h-[330px] flex flex-col items-start gap-6 p-8 bg-white border border-gray-200 rounded-xl box-border'>
			<TabNavContainer profileData={profileData} />
		</aside>
	);
};

export default Sidebar;
