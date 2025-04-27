"use client";
import { useTranslations } from "next-intl";

// components
import ContentHeader from "@/app/_components/myAccountContainer/ContentHeader";
import ContentBox from "@/app/_components/myAccountContainer/profile/ContentBox";
import { useState } from "react";
import EditProfileBox from "@/app/_components/myAccountContainer/profile/editProfile/EditProfileBox";

const page = () => {
	const t = useTranslations("app");
	const [editProfile, setEditProfile] = useState(false);
	const handleProfileAction = () => {
		if (editProfile) {
			setEditProfile(false);
		} else {
			setEditProfile(true);
		}
	};

	return (
		<div className='w-full flex flex-col gap-8'>
			<ContentHeader
				handleOnclick={handleProfileAction}
				title={t("profile")}
				btnText={editProfile ? t("Save changes") : t("myProfile.editProfile")}
			/>

			{editProfile ? <EditProfileBox /> : <ContentBox />}
		</div>
	);
};

export default page;
