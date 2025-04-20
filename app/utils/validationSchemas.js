import * as Yup from "yup";

export const signupSchema = Yup.object({
	firstName: Yup.string()
		.max(15, "Must be 15 characters or less")
		.required("Required"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
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

export const signinSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required"),
});

export const forgotPasswordSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
});

export const resetPasswordSchema = Yup.object({
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
