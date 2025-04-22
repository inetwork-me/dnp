import * as Yup from "yup";

// This schema validates the signup form fields
export const signupSchema = Yup.object({
	fullName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Required")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
});

// This schema validates the signin form fields
export const signinSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Required")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
		),
});

// This schema validates the email field in the  recover account form
export const recoverAccountSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
});

// this schema validates the otp field in the send otp form
export const sendOtpSchema = Yup.object({
	otp: Yup.string()
		.matches(/^\d{6}$/, "OTP must be 6 digits")
		.required("Required"),
	otpExpire: Yup.string().required("Required"),
});

export const createNewPasswordSchema = Yup.object({
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Required")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required(" Required"),
});
