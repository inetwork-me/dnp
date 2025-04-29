import { CheckboxWithText } from "@/app/_shared/ui/checkboxWithText";
import { useState } from "react";

const RememberMe = ({ t }) => {
	const [rememberMe, setRememberMe] = useState(false);
	return (
		<>
			{/*<Checkbox
				id='remember'
				label={t("Remember me")}
				checked={rememberMe}
				onChange={() => setRememberMe(!rememberMe)}
			/>*/}

			<CheckboxWithText
				className='flex-row-reverse'
				id='remember'
				label={t("Remember me")}
			/>
		</>
	);
};

export default RememberMe;
