import { Navigate } from "react-router-dom";

const PublicRute = ({ children }) => {
	const item = JSON.parse(localStorage.getItem("auth"));

	if (!item.auth) return children;
	return <Navigate to="/" />;
};

export default PublicRute;
