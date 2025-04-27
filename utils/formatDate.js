import moment from "moment";

export const formatDate = (dateString) => {
	return moment(dateString).format("DD MMMM YYYY"); // Format: 03 March 2023
};
