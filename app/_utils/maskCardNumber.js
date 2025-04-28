export const maskCardNumber = (number) => {
	if (typeof number !== "string") return ""; // Ensure the input is a string
	if (number.length === 0) return ""; // Return empty string if the input is empty
	const cleanNumber = number.replace(/\s+/g, ""); // Remove spaces

	if (cleanNumber.length <= 4) {
		return cleanNumber; // Return the number as is if it's 4 digits or less
	}

	const visibleDigits = 4;
	const lastDigits = cleanNumber.slice(-visibleDigits);
	const maskedSection = "*".repeat(cleanNumber.length - visibleDigits);
	const masked = maskedSection + lastDigits;

	return masked.match(/.{1,4}/g).join(" ");
};
