import MiddleNav from "./MiddleNav";
import Navigation from "./Navigation";
import TopNav from "./topNav/TopNav";

const Header = () => {
	return (
		<header>
			<TopNav />
			<MiddleNav />
			<Navigation />
		</header>
	);
};

export default Header;
