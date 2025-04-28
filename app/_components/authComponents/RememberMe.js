import { useState } from "react";
import Checkbox from "../Checkbox";

const RememberMe = ({ t }) => {
	const [rememberMe, setRememberMe] = useState(false);
	return (
		<>
			<Checkbox
				id='remember'
				label={t("Remember me")}
				checked={rememberMe}
				onChange={() => setRememberMe(!rememberMe)}
			/>
		</>
	);
};

export default RememberMe;
